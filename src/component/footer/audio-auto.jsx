import React, { forwardRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Audio = forwardRef(({ trackData, handleDuration, handleCurrentTime, isPlaying }, ref) => {
  const [buffering, setBuffering] = useState(false);
  const [preloadTimeout, setPreloadTimeout] = useState(null);

  const handleWaiting = () => {
    setBuffering(true);
  };

  const handlePlaying = () => {
    setBuffering(false);
  };

  useEffect(() => {
    if (buffering && isPlaying) {
      if (!preloadTimeout) {
        const bufferSize = 60; // 1 minuto
        const timeout = setTimeout(() => {
          setBuffering(false);
          setPreloadTimeout(null);
        }, bufferSize * 1000);
        setPreloadTimeout(timeout);
      }
    } else {
      if (preloadTimeout) {
        clearTimeout(preloadTimeout);
        setPreloadTimeout(null);
      }
    }
  }, [buffering, isPlaying, preloadTimeout]);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying, ref]);

  useEffect(() => {
    if (!buffering) {
      ref.current.play();
    }
  }, [buffering, ref]);

  return (
    <audio
      ref={ref}
      onLoadedMetadata={(e) => handleDuration(e.target.duration)}
      onTimeUpdate={(e) => handleCurrentTime(e.target.currentTime)}
      onWaiting={handleWaiting}
      onPlaying={handlePlaying}
      src={trackData.track}
      autoPlay={isPlaying}
    />
  );
});

Audio.propTypes = {
  handleDuration: PropTypes.func.isRequired,
  handleCurrentTime: PropTypes.func.isRequired,
};

export default Audio;
