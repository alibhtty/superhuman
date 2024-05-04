import React, { useState } from "react";
import { connect } from 'react-redux';
import { changeTrack } from '../../actions';
import { Link } from "react-router-dom";
import TextBoldL from '../text/text-bold-l';
import PlayButton from '../buttons/play-button';
import ContentLoader from "react-content-loader";

import styles from "./playlist-card-s.module.css";

function PlaylistCardS(props){
    const[isthisplay, setIsthisPlay] = useState(false)
    const[loaded, setLoaded] = useState(false)

    function changeTheme(){
        document.documentElement.style.setProperty('--hover-home-bg', props.data.hoverColor);
    }

    function handleClick() {
        props.changeTrack([parseInt(props.data.index), 0]);
        setIsthisPlay(parseInt(props.data.index) === props.trackData.trackKey[0]);
    }

    function handleImageLoad() {
        setLoaded(true);
    }

    function handleError(e) {
        e.target.src = './../image/set/selection.jpg';
    }

    return (
        <div className={styles.PlaylistCardSBox}>
            <Link to={`/playlist/${props.data.link}`} onMouseOver={changeTheme}>
                <div className={styles.PlaylistCardS}>
                    <div className={styles.ImgBox}>
                        {!loaded && <ContentLoader 
                            speed={4}
                            width={140}
                            height={210}
                            viewBox="0 0 200 300"
                            backgroundColor="rgba(30,30,30,.7)"
                            foregroundColor="rgba(50,50,50,.5)">
                            {/* <rect x="0" y="310" rx="8" ry="8" width="130" height="20" />  */}
                            <rect x="0" y="0" rx="8" ry="8" width="200" height="300" />
                        </ContentLoader>}
                        <img src={props.data.imgUrl} alt={`${props.data.title}`} onError={handleError} onLoad={handleImageLoad} style={loaded ? {} : { display: 'none' }} />
                    </div>
                    <div className={styles.Title}>
                        <TextBoldL>{props.data.title}</TextBoldL>
                    </div>
                </div>
            </Link>
            <div
                onClick={handleClick} 
                className={`${styles.IconBox} ${isthisplay&&props.isPlaying ? styles.ActiveIconBox : ''}`}
            >
                <PlayButton isthisplay={isthisplay}/>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
	return {
		trackData: state.trackData,
		isPlaying: state.isPlaying
	};
};

export default connect(mapStateToProps, { changeTrack })(PlaylistCardS);
