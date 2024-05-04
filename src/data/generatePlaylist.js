import { useEffect, useState } from 'react';

export const useGeneratePlaylist = (playlistName) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`/musica/${playlistName}`)
      .then(response => response.json())
      .then(data => {
        const mp3Files = data.filter(file => file.endsWith('.mp3'));

        const newSongs = mp3Files.map((file, index) => ({
          index: index + 1,
          songName: file.slice(0, -4),  // Elimina la extensión .mp3
          songimg: `./image/set/${playlistName}/${file}.jpg`,
          songArtist: 'Ali Bhtty',  // Necesitarás una forma de obtener el artista real del archivo
          link: `/musica/${playlistName}/${file}`,
          trackTime: '23:37',  // Necesitarás una forma de obtener la duración real de la canción
        }));

        setSongs(newSongs);
      });
  }, [playlistName]);

  return songs;
};
