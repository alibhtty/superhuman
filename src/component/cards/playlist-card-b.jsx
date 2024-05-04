import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { changeTrack } from '../../actions';
import { Link } from "react-router-dom";
import TextBoldL from '../text/text-bold-l';
import TextRegularM from '../text/text-regular-m';
import PlayButton from '../buttons/play-button';

import styles from "./playlist-card-b.module.css";

function PlaylistCardB(props){
    const[isthisplay, setIsthisPlay] = useState(false)

    function changeTheme(){
        document.documentElement.style.setProperty('--hover-home-bg', props.data.hoverColor);
    }

    useEffect(() => {
		setIsthisPlay(parseInt(props.data.index) === props.trackData.trackKey[0])
	})

    // IMG DE ERROR 1X1
    function handleError(e) {
        e.target.src = './../image/set/selection.jpg';
    }

    return (
        <div className={styles.PlaylistCardBBox}>
            <Link to={`/playlist/${props.data.link}`} onMouseOver={changeTheme}>
                <div className={styles.PlaylistCardB}>
                    <div className={styles.ImgBox}>
                        <img src={props.data.imgUrl} alt={`${props.data.title}`} onError={handleError}/>
                    </div>
                    <div className={styles.Title}>
                        <TextBoldL>{props.data.title}</TextBoldL> <p className={styles.artist}>{props.data.artist}</p>
                    </div>
                </div>
            </Link>
            <div
                onClick={() => props.changeTrack([parseInt(props.data.index), 0])} 
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
  
export default connect(mapStateToProps, { changeTrack })(PlaylistCardB);