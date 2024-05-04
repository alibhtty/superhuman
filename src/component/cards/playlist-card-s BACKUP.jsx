import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { changeTrack } from '../../actions';
import { Link } from "react-router-dom";
import TextBoldL from '../text/text-bold-l';
import PlayButton from '../buttons/play-button';

import styles from "./playlist-card-s.module.css";

import { Helmet } from "react-helmet";

function PlaylistCardS(props){
    const[isthisplay, setIsthisPlay] = useState(false)
    

    function changeTheme(){
        document.documentElement.style.setProperty('--hover-home-bg', props.data.hoverColor);
    }

    useEffect(() => {
		setIsthisPlay(parseInt(props.data.index) === props.trackData.trackKey[0])
	})

    return (
        <div className={styles.PlaylistCardSBox}>
            <Link to={`/playlist/${props.data.link}`} onMouseOver={changeTheme}>
                <div className={styles.PlaylistCardS}>
                    <div className={styles.ImgBox}>
                        <img src={props.data.imgUrl} alt={`${props.data.title}`} />
                    </div>
                    <div className={styles.Title}>
                        <TextBoldL>{props.data.title}</TextBoldL>
                    </div>
                </div>
            </Link>
            <div
                //onClick={() => props.changeTrack({ playlistIndex: parseInt(props.data.index), artistIndex: null })}
                onClick={() => props.changeTrack({ type: 'playlist', index: props.data.index })}

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



const divs = document.querySelectorAll('.PlaylistCardS');
let hoverTimeout;

divs.forEach(div => {
    div.addEventListener('mouseover', () => {
        div.style.opacity = 0.5;
        clearTimeout(hoverTimeout);
    });

    div.addEventListener('mouseout', () => {
        hoverTimeout = setTimeout(() => {
            div.style.opacity = 1;
        }, 400);
    });
});


/* const PLAYLIST = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17'];

shuffle(PLAYLIST);

function shuffle(array) {
    let shuffledArray = [];
    let usedIndexes = [];

    let i = 0;
    while (i < array.length) {
        let randomNumber = Math.floor(Math.random() * array.length);
        if (!usedIndexes.includes(randomNumber)) {
            shuffledArray.push(array[randomNumber]);
            usedIndexes.push(randomNumber);
            i++;
        }
    }
    console.log(shuffledArray);
    return shuffledArray;
}; */
  
export default connect(mapStateToProps, { changeTrack })(PlaylistCardS);