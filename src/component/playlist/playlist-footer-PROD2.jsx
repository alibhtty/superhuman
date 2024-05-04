import React from 'react';
import TitleS from '../text/title-s';
import TextBoldM from '../text/text-bold-m';

import styles from "./playlist-footer.module.css";

function PlaylistFooter({data}) {
  // Verificar si hay imágenes en la playlist
  const hasImages = data.playlistImages && data.playlistImages.length > 0;

  // Renderizar las imágenes si están disponibles
  const renderImages = () => {
    if (!hasImages) return null; // No mostrar nada si no hay imágenes

    return (
      <div className={styles.imgBox}>
        {data.playlistImages.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} className={styles.image} />
        ))}
      </div>
    );
  };

  return (
    <div className={styles.footerDetails}>
      {renderImages()}

      <div className={styles.textBox}>
        <div className={styles.Artist}>
          <figure>
            <img src={data.artistImgUrl} alt="Artist" />
          </figure>
          <div className={styles.boxBio}>
            <a className={styles.textBio} href={data.artistBio} target="_blank" rel="noopener noreferrer">Follow</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaylistFooter;
