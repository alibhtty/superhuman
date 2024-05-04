import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link
import './banner-link.css';

const BannerLink = ({ image, text, subtitle, description, to }) => {
  return (
    <div className="banner-link">
      <Link to={to}> {/* Utiliza Link para crear enlaces de React Router */}
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

export default BannerLink;
