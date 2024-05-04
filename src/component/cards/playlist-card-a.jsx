import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { changeTrack } from '../../actions';
import { Link } from "react-router-dom";
import TextBoldL from '../text/text-bold-l';
import PlayButton from '../buttons/play-button';

import styles from "./playlist-card-a.module.css";

function PlaylistCardA(props){
    const[isthisplay, setIsthisPlay] = useState(false)

    function changeTheme(){
        document.documentElement.style.setProperty('--hover-home-bg', props.data.hoverColor);
    }

    useEffect(() => {
		setIsthisPlay(parseInt(props.data.index) === props.trackData.trackKey[0])
	})

    return (
        <div className={styles.PlaylistCardABox}>
            <Link to={`/playlist/${props.data.link}`} onMouseOver={changeTheme}>
                <div className={styles.PlaylistCardA}>
                    <div className={styles.ImgBox}>
                        <img src={props.data.imgUrl} alt={`${props.data.title}`} />
                    </div>
                    <div className={styles.Title}>
                        <TextBoldL>{props.data.title}</TextBoldL>
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



const divs = document.querySelectorAll('.PlaylistCardA');
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

  
export default connect(mapStateToProps, { changeTrack })(PlaylistCardA);