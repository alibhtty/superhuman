import { useRef, useEffect, useState } from "react";
import useIsInViewport from "./hooks/useIsInViewport";
import PlayIcon from './assets/icons/mixtape.svg';

const Descubre = ({
  index,
  songName,
  songimg,
  songCut,
  author,
  authorLink,
}) => {
  const audio = useRef();
  const isInViewport = useIsInViewport(audio);
  const [isPaused, setIsPaused] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const currentAudio = audio.current;

    const playWhenReady = () => {
      if (isInViewport) {
        currentAudio.play();
        setIsPaused(false);
      } else {
        currentAudio.pause();
        setIsPaused(true);
      }
    };

    currentAudio.addEventListener('canplay', playWhenReady);

    return () => {
      currentAudio.removeEventListener('canplay', playWhenReady);
    };
  }, [isInViewport]);

  useEffect(() => {
    return () => {
      const currentAudio = audio.current;
      if (currentAudio) {
        currentAudio.pause();
        setIsPaused(true);
      }
    };
  }, []);
  

  const togglePlayPause = () => {
    if (audio.current.paused) {
      audio.current.play();
      setIsPaused(false);
      setIsPlaying(true);
    } else {
      audio.current.pause();
      setIsPaused(true);
      setIsPlaying(false);
    }
  };

  return (    
    <div className="slider-children">
        {/* <div className="marge-reel"> </div> */}
        <div className={`background-image ${isPlaying ? 'playing' : ''}`} style={{backgroundImage: `url(${songimg})`}}></div>
            <img src={songimg} alt={songName} className={`song-image ${isPlaying ? 'playing' : ''}`}/>
            <audio className="audio"
                ref={audio}
                id={index}
                //autoPlay={index === "1"}
                //loop
                //playsInline
                >
              <source src={songCut} type="audio/mp3" />
            </audio>

            <div className="audio-overlay" onClick={togglePlayPause}>
                {isPaused && <img src={PlayIcon} alt="Play" className="play-icon"/>}
            </div>

            <div className="audio-content">
              <p className="m-0">@{author}</p>
              <p>
                Post by <a href={authorLink}>{author} </a> en Mixtape
              </p>
            </div>
    </div>

  );
};

export default Descubre;
