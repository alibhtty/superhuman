import { connect } from 'react-redux';
import { changeTrack } from '../../../actions';
import * as Icons from '../../icons';
import IconButton from '../../buttons/icon-button';
import PlayButton from '../../buttons/play-button';
import { useEffect, useRef, useState } from 'react';

import { PLAYLIST } from "../../../data/index";
import styles from "./music-control-box.module.css";

function MusicControlBox(props){
    const audioRef = useRef();
    const nextAudioRef = useRef();
    const [isCrossfading, setIsCrossfading] = useState(false);

    // Cambia a la siguiente canción
    const nextSong = async () => {
        const { trackKey } = props.trackData;
        const song = PLAYLIST[trackKey[0]].playlistData[trackKey[1]];
        nextAudioRef.current.src = song.songUrl;
        var playPromise = nextAudioRef.current.play();
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // La reproducción ha comenzado exitosamente
            })
            .catch(error => {
                // La reproducción fue prevenida
                // Muestra la interfaz de usuario en pausa
            });
        }
    };

    // Actualiza los metadatos de la canción cada vez que cambia la canción
    useEffect(() => {
        if ('mediaSession' in navigator) {
            const { trackKey } = props.trackData;
            const song = PLAYLIST[trackKey[0]].playlistData[trackKey[1]];
            navigator.mediaSession.metadata = new MediaMetadata({
                title: song.songName,
                artist: song.songArtist,
                artwork: [{ src: song.songimg, type: 'image/jpeg' }] /*  sizes: '512x512' */
            });
        }
    }, [props.trackData, props.changePlay]);

    // Recupera la canción y el tiempo transcurrido del almacenamiento local
    useEffect(() => {
        const currentSong = JSON.parse(localStorage.getItem('currentSong'));
        const currentTime = localStorage.getItem('currentTime');
        if (currentSong && currentTime && audioRef.current) {
            // Carga la canción y el tiempo transcurrido del almacenamiento local
            props.changeTrack(currentSong.trackKey);
            audioRef.current.currentTime = currentTime;
        }
    }, []);

    // Añade un manejador de eventos para el evento 'beforeunload'
    useEffect(() => {
        // Guarda la canción actual y el tiempo transcurrido en el almacenamiento local
        if (audioRef.current) {
            localStorage.setItem('currentSong', JSON.stringify(props.trackData));
            localStorage.setItem('currentTime', audioRef.current.currentTime);
        }
    
        // Reproduce la siguiente canción
        if (!isCrossfading && audioRef.current && audioRef.current.duration - audioRef.current.currentTime <= 5) {
            setIsCrossfading(true);
            nextSong();
            let fadePoint = audioRef.current.duration - 5; // Fade out during the last 5 seconds
            let fadeAudio = setInterval(function () {
                // Only fade if past the fade out point or not at zero already
                if ((audioRef.current.currentTime >= fadePoint) && (audioRef.current.volume != 0.0)) {
                    audioRef.current.volume -= 0.1;
                    nextAudioRef.current.volume += 0.1;
                }
                // When volume at zero stop audio playing
                if (audioRef.current.volume <= 0.1) {
                    audioRef.current.pause();
                    clearInterval(fadeAudio);
                }
            }, 200);
        }
    }, [props.trackData, audioRef.current ? audioRef.current.currentTime : null]);
    
    function decreaseIndex(){
        if(props.trackData.trackKey[1] !== 0){
            props.changeTrack([props.trackData.trackKey[0], props.trackData.trackKey[1]-1])
        }
    }

    /* ========= SALTA A LA SIGUIENTE LISTA CON CANCIONES ========= */
    function increaseIndex(){
        let playlistIndex = parseInt(props.trackData.trackKey[0]);
        let songIndex = parseInt(props.trackData.trackKey[1]);
    
        if(songIndex !== (PLAYLIST[playlistIndex].playlistData.length)-1){
            props.changeTrack([playlistIndex.toString(), (songIndex+1).toString()])
        } else {
            // Si se ha llegado al final de la lista de reproducción actual, busca la siguiente lista de reproducción que tiene canciones
            let nextPlaylistIndex = playlistIndex;
            do {
                nextPlaylistIndex = (nextPlaylistIndex + 1) % PLAYLIST.length;
            } while (PLAYLIST[nextPlaylistIndex].playlistData.length === 0 && nextPlaylistIndex !== playlistIndex);
    
            if (nextPlaylistIndex !== playlistIndex) {
                // Si se encontró una lista de reproducción con canciones, pasa a la primera canción de esa lista de reproducción
                props.changeTrack([nextPlaylistIndex.toString(), "0"])
            } else {
                // Si no se encontró ninguna lista de reproducción con canciones, vuelve a la primera canción de la primera lista de reproducción
                props.changeTrack(["0", "0"])
            }
        }
    }
    
    

    return (
        <div className={styles.musicControl}>
            <button className={styles.buttonleft} onClick={decreaseIndex}>
                <Icons.Prev />
            </button>
            <PlayButton className={styles.buttonplay} isthisplay={true}/>
            <button className={styles.button} onClick={increaseIndex}>
                <Icons.Next />
            </button>
            <audio ref={audioRef} src={props.trackData.track} preload="auto" /> {/* Asegúrate de que el elemento de audio está presente */}
            <audio ref={nextAudioRef} preload="auto" style={{display: 'none'}} />
            {/* <audio ref={nextAudioRef} style={{display: 'none'}} /> */}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      trackData: state.trackData
    };
};
  
export default connect(mapStateToProps, { changeTrack })(MusicControlBox);