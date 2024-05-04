import React from 'react';
import "./social-image.css";

const SocialImage = ({ image, text, subtitle, description, url }) => {
  return (
    <a href={url} target='_blank'>
      <div className="social-image">
      {/* <div className="social-text">{text}</div> */}
        <img src={image} alt="Instagram" />
            {/* <div className="banner-text">{text}</div>
            <div className="grid-promote">
            <div className="banner-subtitle">{subtitle}</div>
            <div className="banner-description">{description}</div>
            </div> */}
      </div>
    </a>
  );
};

export default SocialImage;

