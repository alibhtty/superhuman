import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { changeTrack } from '../../actions';
import { Link } from "react-router-dom";
import TextBoldL from '../text/text-bold-l';
import PlayButton from '../buttons/play-button';
import { useSwipeable } from 'react-swipeable';
import Marquee from 'react-fast-marquee';
import ContentLoader from "react-content-loader";
//import { motion } from "framer-motion";

import styles from "./playlist-card-g.module.css";

function PlaylistCardG(props){
    const[isthisplay, setIsthisPlay] = useState(false)
    const[currentImageIndex, setCurrentImageIndex] = useState(0)
    const[fade, setFade] = useState(false)
    const[loaded, setLoaded] = useState(false)

    const images = [props.data.imgUrl, props.data.imgUrlB, props.data.imgUrlC, props.data.imgUrlD, props.data.imgUrlE];

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            setFade(true)
            setCurrentImageIndex((currentImageIndex + 1) % images.length)
        },
        onSwipedRight: () => {
            setFade(true)
            setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length)
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFade(true)
            setCurrentImageIndex((currentImageIndex + 1) % images.length);
        }, 13000); // Cambia la imagen cada 4 segundos - 6000
        return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
    }, [currentImageIndex, images.length]);

    useEffect(() => {
        if (fade) {
            const timer = setTimeout(() => {
                setFade(false)
            }, 11000) // Duración de la animación
            return () => clearTimeout(timer)
        }
    }, [fade])

    function changeTheme(){
        document.documentElement.style.setProperty('--hover-home-bg', props.data.hoverColor);
    }

    useEffect(() => {
		setIsthisPlay(parseInt(props.data.index) === props.trackData.trackKey[0])
	})

    function handleImageLoad() {
        setLoaded(true);
    }

    function handleError(e) {
        e.target.src = './../assets/icons/share.jpg';  /* ./../image/set/selection.jpg */
    }

    return (
        <div className={styles.PlaylistCardGBox} {...handlers}>
        <Link to={`/playlist/${props.data.link}`} onMouseOver={changeTheme}>
            <div className={styles.PlaylistCardG}>
                <div className={styles.ImgBox} style={{position: 'relative'}}>
                    {!loaded && 
                    <ContentLoader 
                        speed={4}
                        width={340}
                        height={140}
                        viewBox="0 0 340 140"
                        backgroundColor="rgba(30,30,30,.3)"
                        foregroundColor="rgba(50,50,50,.4)"
                        style={{ position: 'absolute', top: 0, left: 0 }}
                    >
                        <rect x="0" y="0" rx="8" ry="8" width="340" height="140" />
                    </ContentLoader>}
                    <img className={fade ? 'fade-in' : ''} src={images[currentImageIndex]} alt={`${props.data.title}`}  onError={handleError} onLoad={handleImageLoad} style={loaded ? { position: 'absolute', top: 0, left: 0 } : { display: 'none' }} />
                    <div style={{position: 'absolute', display: 'flex', bottom: '-1.3rem', left: '0px'}}> {/* Añade una capa absoluta para los indicadores */}
                        {images.map((image, index) => (
                            <div
                                key={index}
                                style={{
                                    position: 'relative',
                                    display: 'flex',
                                    height: '10px',
                                    width: '4px',
                                    backgroundColor: index === currentImageIndex ? '#396fbf' : '#555555', //066EFF  ff6600
                                    margin: '2px',
                                    borderRadius: '1px'
                                }}
                            />
                        ))}
                    </div>
                </div>

                    {/* <Marquee >
                            <TextBoldL>{props.data.title} – {props.data.artist}</TextBoldL>
                        </Marquee> */}
                    <div className={styles.Title}>
                        <Marquee speed={20}>
                            <TextBoldL>{props.data.comentario} &nbsp; {props.data.title} – {props.data.artist}</TextBoldL>
                        </Marquee>
                        {/* <div className={styles.Marquebox}>
                            <TextBoldL>{props.data.title} – {props.data.artist}</TextBoldL>
                        </div> */}
                    </div>

                    {<div className={styles.Tag}>
                        <img src={props.data.artistImgUrl} alt={`${props.data.title}`} />
                    </div>}

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

export default connect(mapStateToProps, { changeTrack })(PlaylistCardG);
