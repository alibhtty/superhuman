import React, { useEffect, useState } from 'react';
import { PLAYLIST } from '../../data/index';

function MusicPlayer() {
  const [audioContext, setAudioContext] = useState(null);

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

  const playSong = async (songLink) => {
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
      audioSource.start();
    } catch (error) {
      console.error('Error al cargar o reproducir la canción:', error);
    }
  };

  useEffect(() => {
    if (audioContext) {
      // Reproduce la primera canción de la primera lista de reproducción
      const firstSong = PLAYLIST[0]?.playlistData[0];
      if (firstSong) {
        playSong(firstSong.link);
      }
    }
  }, [audioContext]);

  return (
    <div>
      {/* Aquí puedes agregar los controles de reproducción y cualquier otra UI que necesites para tu reproductor de música */}
    </div>
  );
}

export default MusicPlayer;
