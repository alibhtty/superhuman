import * as Icon from '../component/icons';
import React, { useEffect, useState } from "react";
import { preLoaderAnim } from ".";
import './preloader.css'

const PreLoader = () => {
  const [preloaderFinished, setPreloaderFinished] = useState(false);

  useEffect(() => {
    preLoaderAnim();

    // Simula la finalización del preloader después de un tiempo (solo para propósitos de demostración)
    const timer = setTimeout(() => {
      setPreloaderFinished(true);
    }, 800); // Aquí puedes ajustar el tiempo según tus necesidades

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${preloaderFinished ? 'finished' : ''}`}>
      <Icon.Mixtape className="logo-preloader" />

      <div className="bottom-text">
        <span>4B & CO. <br></br> <b>v3.14</b></span>
      </div>
    </div>
  );
};

export default PreLoader;


/* import * as Icon from '../component/icons';
import React, { useEffect } from "react";
import { preLoaderAnim } from ".";
import './preloader.css'

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <Icon.Mixtape className="logo-preloader" />

      <div className="bottom-text">
        <span>4B & CO. <br></br> <b>v3.14</b></span>
      </div>
    </div>
  );
};

export default PreLoader;
 */