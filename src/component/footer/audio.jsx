import React, { forwardRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Audio = forwardRef(({ trackData, handleDuration, handleCurrentTime, isPlaying }, ref) => {
  const [buffering, setBuffering] = useState(false);
  const [preloadTimeout, setPreloadTimeout] = useState(null);
  const [userInteracted, setUserInteracted] = useState(false);

  const handleWaiting = () => {
    setBuffering(true);
  };

  const handlePlaying = () => {
    setBuffering(false);
  };

  const handlePlayButtonClick = () => {
    if (!isPlaying) {
      setUserInteracted(true); // Marca que el usuario ha interactuado
    }
  };

  useEffect(() => {
    if (isPlaying && !buffering && userInteracted) {
      ref.current.play().catch(error => {
        console.error('Error al reproducir el audio:', error);
      });
    } else {
      ref.current.pause();
    }
  }, [isPlaying, buffering, userInteracted, ref]);

  useEffect(() => {
    if (!buffering && userInteracted) {
      ref.current.play().catch(error => {
        console.error('Error al reproducir el audio:', error);
      });
    }
  }, [buffering, userInteracted, ref]);

  useEffect(() => {
    if (buffering && isPlaying && userInteracted) {
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
  }, [buffering, isPlaying, userInteracted, preloadTimeout]);

  return (
    <div>
      <audio
        ref={ref}
        onLoadedMetadata={(e) => handleDuration(e.target.duration)}
        onTimeUpdate={(e) => handleCurrentTime(e.target.currentTime)}
        onWaiting={handleWaiting}
        onPlaying={handlePlaying}
        src={trackData.track}
        autoPlay={isPlaying}
      />
      {!isPlaying && (
        <button onClick={handlePlayButtonClick}>     </button>
      )}
    </div>
  );
});

Audio.propTypes = {
  handleDuration: PropTypes.func.isRequired,
  handleCurrentTime: PropTypes.func.isRequired,
  trackData: PropTypes.object.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default Audio;