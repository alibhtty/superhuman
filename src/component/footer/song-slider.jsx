import React, { useRef, useEffect, useState } from 'react';
import { changeTrack, changePlay } from '../../actions';
import { PLAYLIST } from "../../data/index";
import styles from "./footer.module.css";

import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import FooterLeft from './footer-left';
import MusicControlBox from './player/music-control-box';
import MusicProgressBar from './player/music-progress-bar';
import Audio from './audio';

function SongSlider(props){
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
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
        audioRef.current.addEventListener('ended', () => {
            if(props.trackData.trackKey[1] === (PLAYLIST[props.trackData.trackKey[0]].playlistData.length)-1){
                props.changeTrack([props.trackData.trackKey[0], 0])
            }else{
                props.changeTrack([props.trackData.trackKey[0], parseInt(props.trackData.trackKey[1])+1])
            }
        })
    });

    return (
        <motion.footer
          className={styles.footer}
          animate={{ height: isExpanded ? "100vh" : "initial" }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }} 
          onClick={(event) => {
            event.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
        >
          <div className={styles.nowplayingbar}>
            <FooterLeft />
            <div className={styles.footerMid}>
              <div onClick={(event) => event.stopPropagation()}>
                <MusicControlBox />
              </div>
              {isExpanded && (
                <MusicProgressBar 
                  currentTime={currentTime} 
                  duration={duration} 
                  handleTrackClick={handleTrackClick}
                />
              )}
              <Audio
                ref={audioRef}
                handleDuration={setDuration}
                handleCurrentTime={setCurrentTime}
                trackData={props.trackData}
                isPlaying={props.isPlaying}
              />
            </div>
          </div>
        </motion.footer>
    );
}

const mapStateToProps = (state) => {
    return {
      trackData: state.trackData,
      isPlaying: state.isPlaying
    };
};

export default connect(mapStateToProps, { changeTrack, changePlay })(SongSlider);
