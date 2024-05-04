import React, { forwardRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Audio = forwardRef(({ trackData, handleDuration, handleCurrentTime, isPlaying }, ref) => {
  const [buffering, setBuffering] = useState(false);

  const handleWaiting = () => {
    setBuffering(true);
  };

  const handlePlaying = () => {
    setBuffering(false);
  };

  useEffect(() => {
    if (buffering) {
      // Pausa la reproducción mientras se carga el buffer
      ref.current.pause();
    } else if (isPlaying) {
      // Reanuda la reproducción cuando el buffer esté listo
      ref.current.play();
    }
  }, [buffering, isPlaying, ref]);

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
