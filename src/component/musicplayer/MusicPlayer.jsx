import React, { useEffect, useState } from 'react';

function MusicPlayer() {
  const [audioContext, setAudioContext] = useState(null);
  const [songLoaded, setSongLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
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

  useEffect(() => {
    const audioWorker = new Worker('ruta_al_archivo_audioWorker.js');

    audioWorker.onmessage = (event) => {
      const audioBuffer = event.data;
      playAudioBuffer(audioBuffer);
    };

    return () => {
      audioWorker.terminate();
    };
  }, []);

  const playAudioBuffer = (audioBuffer) => {
    if (!audioContext) {
      console.error('El contexto de audio no está disponible.');
      return;
    }

    try {
      const audioSource = audioContext.createBufferSource();
      audioSource.buffer = audioBuffer;
      audioSource.connect(audioContext.destination);
      
      audioSource.onended = () => {
        setIsPlaying(false);
      };

      audioSource.start();
      setIsPlaying(true);
      setSongLoaded(true);
    } catch (error) {
      console.error('Error al reproducir la canción:', error);
    }
  };

  const loadAndPlaySong = (songLink) => {
    const audioWorker = new Worker('audioWorker.js');
    audioWorker.postMessage(songLink);
  };

  const handlePlayButtonClick = (songLink) => {
    if (isPlaying) {
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
