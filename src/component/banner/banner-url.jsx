import React from 'react';
import "./banner-url.css";

const BannerUrl = ({ image, text, subtitle, description, url }) => {
  return (
    <a href={url} target='_blank'>
      <div className="banner-url">
        <img src={image} alt="Banner" />
        <div className="banner-text">{text}</div>
        <div className="grid-promote">
            <div className="banner-subtitle">{subtitle}</div>
            <div className="banner-description">{description}</div>
        </div>
      </div>
    </a>
  );
};

export default BannerUrl;





/* import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link
import './banner-image.css';

const BannerImage = ({ image, text, subtitle, description, url }) => {
  return (
    <div className="banner-image">
      <Link to={url}>
        <img src={image} alt="Banner" />
        <div className="banner-text">{text}</div>
        <div className="grid-promote">
          <div className="banner-subtitle">{subtitle}</div>
          <div className="banner-description">{description}</div>
        </div>
      </Link>
    </div>
  );
};

export default BannerImage; */