import React, { useEffect } from 'react';
import { PLAYLIST } from '../../data/index';

function MusicPlayer() {
  useEffect(() => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const worker = new Worker('./audioWorker.js');

    worker.onmessage = (event) => {
      const audioBuffer = event.data;
      const audioSource = audioContext.createBufferSource();
      audioSource.buffer = audioBuffer;
      audioSource.connect(audioContext.destination);
      audioSource.start();
    };

    // Asume que quieres reproducir la primera canción de la primera lista de reproducción
    const song = PLAYLIST[0].playlistData[0];
    worker.postMessage(song.link);

    return () => {
      worker.terminate();
    };
  }, []);

  return (
    <div>
      {/* Aquí puedes agregar los controles de reproducción y cualquier otra UI que necesites para tu reproductor de música */}
    </div>
  );
}

export default MusicPlayer;
