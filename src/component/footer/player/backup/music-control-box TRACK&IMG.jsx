import { connect } from 'react-redux';
import { changeTrack } from '../../../actions';
import * as Icons from '../../icons';
import IconButton from '../../buttons/icon-button';
import PlayButton from '../../buttons/play-button';
import { useEffect } from 'react';

import { PLAYLIST } from "../../../data/index";
import styles from "./music-control-box.module.css";

function MusicControlBox(props){

    // Carga la canción actual del almacenamiento local cuando el componente se monta
    useEffect(() => {
        const savedSong = localStorage.getItem('currentSong');
        if (savedSong) {
            const { trackKey } = JSON.parse(savedSong);
            props.changeTrack(trackKey);
        }
    }, []);

    // Guarda la canción actual en el almacenamiento local cada vez que cambia
    useEffect(() => {
        localStorage.setItem('currentSong', JSON.stringify(props.trackData));
    }, [props.trackData]);

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
    }, [props.trackData]);

    function decreaseIndex(){
        if(props.trackData.trackKey[1] == 0){ }else{
            props.changeTrack([props.trackData.trackKey[0], props.trackData.trackKey[1]-1])
        }
    }
    function increaseIndex(){
        if(props.trackData.trackKey[1] == (PLAYLIST[props.trackData.trackKey[0]].playlistData.length)-1){ }else{
            props.changeTrack([props.trackData.trackKey[0], parseInt(props.trackData.trackKey[1])+1])
        }
    }

    return (
        <div className={styles.musicControl}>
            {/* <IconButton icon={<Icons.Mix />} activeicon={<Icons.Mix />}/> */}
            <button className={styles.button} onClick={decreaseIndex}>
                <Icons.Prev />
            </button>
            <PlayButton isthisplay={true}/>
            <button className={styles.button} onClick={increaseIndex}>
                <Icons.Next />
            </button>
            {/* <IconButton icon={<Icons.Loop />} activeicon={<Icons.Loop />}/> */}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      trackData: state.trackData
    };
};
  
export default connect(mapStateToProps, { changeTrack })(MusicControlBox);
