import React from 'react';
import './main.scss'; // Asegúrate de importar tus estilos

import { Swiper, SwiperSlide } from 'swiper/react';
import './paper-onboarding.scss';

const Ajustes = () => {
    return (
      <div id="app">
        <div className="paper-onboarding">
          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide" data-paper-bg-color="#6002EE">
                <div className="slide-inner">
                  <img className="slide-image" src="./images/banks.svg" />
                  <div className="slide-title">Banks</div>
                  <div className="slide-text">Loem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed tempora
                    corrupti official.</div>
                </div>
              </div>

              <div className="swiper-slide" data-paper-bg-color="#6002EE">
                <div className="slide-inner">
                  <img className="slide-image" src="images/banks.svg" />
                  <div className="slide-title">Banks</div>
                  <div className="slide-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed tempora
                    corrupti officia.</div>
                </div>
              </div>

              <div className="swiper-slide" data-paper-bg-color="#6002EE">
                <div className="slide-inner">
                  <img className="slide-image" src="images/banks.svg" />
                  <div className="slide-title">Banks</div>
                  <div className="slide-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed tempora
                    corrupti officia.</div>
                </div>
              </div>

              {/* Agrega más slides según sea necesario */}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Ajustes;