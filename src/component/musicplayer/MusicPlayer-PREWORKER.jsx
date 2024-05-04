import React, { useEffect, useState } from 'react';

function MusicPlayer() {
  const [audioContext, setAudioContext] = useState(null);
  const [songLoaded, setSongLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let context = null;

    const initializeAudioContext = async () => {
      try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        setAudioContext(audioContext);
      } catch (error) {
        console.error('Error al inicializar el contexto de audio:', error);
      }
    };

    initializeAudioContext();

    return () => {
      if (audioContext) {
        audioContext.close();
      }
    };
  }, []);

  const loadAndPlaySong = async (songLink) => {
    if (!audioContext) {
      console.error('El contexto de audio no está disponible.');
      return;
    }

    try {
      const response = await fetch(songLink);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

      const audioSource = audioContext.createBufferSource();
      audioSource.buffer = audioBuffer;
      audioSource.connect(audioContext.destination);
      
      // Escucha el evento 'ended' para detectar cuándo la canción ha terminado
      audioSource.onended = () => {
        setIsPlaying(false); // Actualiza el estado para indicar que la canción ha terminado
      };

      audioSource.start();
      setIsPlaying(true); // Actualiza el estado para indicar que la canción está reproduciéndose
      setSongLoaded(true); // Actualiza el estado para indicar que la canción se ha cargado correctamente
    } catch (error) {
      console.error('Error al cargar o reproducir la canción:', error);
    }
  };

  const handlePlayButtonClick = (songLink) => {
    if (isPlaying) {
      // Si la canción está reproduciéndose, detenla antes de cargar y reproducir la nueva canción
      audioContext.suspend();
      setIsPlaying(false);
    }
    loadAndPlaySong(songLink);
  };

  return (
    <div>
      <button onClick={() => handlePlayButtonClick('URL_DE_LA_CANCION')}>
        Reproducir canción
      </button>
      {songLoaded && <div>Canción cargada y lista para reproducir</div>}
    </div>
  );
}

export default MusicPlayer;
