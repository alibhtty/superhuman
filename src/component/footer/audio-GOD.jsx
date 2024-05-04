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
      // Si está en estado de buffering y reproduciéndose,
      // se cancela el timeout de precarga si existe
      if (preloadTimeout) {
        clearTimeout(preloadTimeout);
      }

      // Se inicia un nuevo timeout de precarga
      const timeout = setTimeout(() => {
        // Cuando se complete el timeout, se cancela el estado de buffering
        setBuffering(false);
      }, 3000); // Ajusta el tiempo de precarga según tus necesidades

      // Se guarda el ID del timeout para poder cancelarlo más tarde
      setPreloadTimeout(timeout);
    } else {
      // Si no está en estado de buffering o no está reproduciéndose,
      // se cancela el timeout de precarga si existe
      if (preloadTimeout) {
        clearTimeout(preloadTimeout);
        setPreloadTimeout(null);
      }
    }
  }, [buffering, isPlaying, preloadTimeout]);

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
