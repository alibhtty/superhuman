import React, { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeTrack, changePlay } from '../../actions';
import useWindowSize from '../../hooks/useWindowSize';
import FooterLeft from './footer-left';
import MusicControlBox from './player/music-control-box';
import MusicProgressBar from './player/music-progress-bar';
import FooterRight from './footer-right';
import Audio from './audio';

import { PLAYLIST } from "../../data/index";
import CONST from '../../constants/index';
import styles from "./footer.module.css";

function Footer(props){
    const size = useWindowSize();

    const playlistIndex = props.trackData.trackKey[0];
    const songIndex = props.trackData.trackKey[1];
    const songImg = PLAYLIST[playlistIndex].playlistData[songIndex].songimg;


    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const audioRef = useRef(null);

    const handleTrackClick = (position) => {
        audioRef.current.currentTime = position;
    };

    useEffect(() => {
        if (props.isPlaying) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
    }, [audioRef, props.isPlaying]);

    useEffect(() => {
        audioRef.current.volume = volume;
    }, [audioRef, volume]);

    
    useEffect(() => {
        audioRef.current.addEventListener('ended', () => {
            if(props.trackData.trackKey[1] === (PLAYLIST[props.trackData.trackKey[0]].playlistData.length)-1){
                props.changeTrack([props.trackData.trackKey[0], 0])
            }else{
                props.changeTrack([props.trackData.trackKey[0], parseInt(props.trackData.trackKey[1])+1])
            }
        })
    });

    const location = useLocation();
    const isHidden = location.pathname === '/search' || location.pathname === '/news' || location.pathname === '/terms' || location.pathname === '/descubre';


    return (
        <footer className={styles.footer} style={{ display: isHidden ? 'none' : 'block', overflow: 'hidden' }}>
    <div className={styles.footerdiv}
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%', borderRadius: 4,
        backgroundImage: `url(${songImg})`,
        backgroundSize: 'cover',
        filter: 'blur(40px) contrast(30%) saturate(500%) brightness(.9)',
        zIndex: -1, overflow: 'hidden',
        transition: 'background-image .5s ease-in-out'
      }}
    ></div>
                <MusicProgressBar 
                        currentTime={currentTime} 
                        duration={duration} 
                        handleTrackClick={handleTrackClick}
                />

            <div className={styles.nowplayingbar}>
                <FooterLeft />
                <div className={styles.footerMid}>
                    
                    <MusicControlBox />
                    
                    <Audio
                        ref={audioRef}
                        handleDuration={setDuration}
                        handleCurrentTime={setCurrentTime}
                        trackData={props.trackData}
                        isPlaying={props.isPlaying}
                    />
                </div>
                {size.width > CONST.MOBILE_SIZE && 
                    <FooterRight 
                        volume={volume} 
                        setVolume={setVolume}
                    />
                }
            </div>
        </footer>
    );
}


const mapStateToProps = (state) => {
    return {
        trackData: state.trackData,
        isPlaying: state.isPlaying
    };
};


export default connect(mapStateToProps, { changeTrack, changePlay })(Footer);