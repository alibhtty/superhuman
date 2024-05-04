import * as Icon from '../component/icons';
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

      {/* <div className="texts-container">
        <img src="https://alibhtty.com/assets/favicon/story.jpg"></img>
        <span>Music</span>
        <span>4ever</span>
      </div> */}
    </div>
  );
};

export default PreLoader;