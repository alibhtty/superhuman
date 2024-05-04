//import React from 'react';
import React, { useEffect } from 'react';
import Topnav from '../../component/topnav/topnav';

//import './styles.css';
import './timeline.css';

const Version = () => {

  /* useEffect(() => {
    // Script para desplazar hacia arriba al hacer clic en el botón
    document.addEventListener('DOMContentLoaded', function() {
      const scrollToTopButton = document.getElementById('scrollToTop');

      scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    });

    // Script para inicializar Fancy Gallery
    const fancyboxScript = document.createElement('script');
    fancyboxScript.src = 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js';
    document.body.appendChild(fancyboxScript);

    // Script para configurar Fancy Gallery
    window.addEventListener('DOMContentLoaded', function() {
      Fancybox.bind("[data-fancybox]", {
        Carousel: {
          infinite: false,
        },
        Slideshow: {
          playOnStart: true,
          timeout: 5000,
        },
        Toolbar: {
          display: {
            left: [],
            middle: [],
            right: ["slideshow", "close"],
          },
        },
        Images: {
          zoom: false,
        },
        Thumbs: false,
        Caption: false,
      });
    });

    // Script para la funcionalidad de la timeline
    const timelines = document.querySelectorAll(".timeline__right");
    const trackers = document.querySelectorAll(".timeline__tracker");
    
    window.addEventListener(
      "scroll",
      e => {
        timelines.forEach((timeline, i) => {
          if (trackers[i].offsetTop > 0) {
            timeline.querySelector(".timeline__content").classList.add("animate-on-scroll");
          } else {
            timeline.querySelector(".timeline__content").classList.remove("animate-on-scroll");
          }
          timeline.style.background = `linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ${
            trackers[i].offsetTop + 5
          }px, var(--color-grey) ${
            trackers[i].offsetTop + 5
          }px, var(--color-grey) 100%)`;
        });
      },
      { passive: true }
    );

    // Asegúrate de eliminar el script de jQuery si no lo necesitas
    // const jqueryScript = document.createElement('script');
    // jqueryScript.src = 'https://code.jquery.com/jquery-3.3.1.min.js';
    // document.body.appendChild(jqueryScript);

    // return () => {
    //   document.body.removeChild(jqueryScript);
    // };

    // Si necesitas usar jQuery, descomenta las líneas anteriores y ajusta tu código según sea necesario

    return () => {
      document.body.removeChild(fancyboxScript);
    };
  }, []); */




  
  return (
    <div className="timeline">

      <Topnav />

      <section className='bantimeline'>
        <picture className='pictimeline' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>  {/* style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '60px', marginBottom: '20px' }} */}
          <img style={{ width: '350px', height: 'auto', borderRadius: '10px' }} src="./assets/icons/share.jpg" className="we-artwork__image ember55768" />
        </picture>
      </section>

      <section className='timeline-cont'>
          {/* -1 */}
          <div className="timeline__section">
            <div className="timeline__left">
              <div className="timeline__date">
                <div>alibhtty</div>
                <div>ABR 2, 2024</div>
              </div>
            </div>
            <div className="timeline__tracker">
              <div className="tracker"></div>
            </div>
            <div className="timeline__middle">
              <div className="timeline__bullet"></div>
            </div>
            <div className="timeline__right">
              <div>
                <div className="timeline__content"> 
                  - Dbug 3.2 <br />
                </div>
              </div>
            </div>
          </div>
    
          {/* 1 */}
          <div className="timeline__section">
            <div className="timeline__left">
              <div className="timeline__date">
                <div>alibhtty</div>
                <div>ABR 1, 2024</div>
              </div>
            </div>
            <div className="timeline__tracker">
              <div className="tracker"></div>
            </div>
            <div className="timeline__middle">
              <div className="timeline__bullet"></div>
            </div>
            <div className="timeline__right">
              <div>
                <div className="timeline__content">
                  - Fix UI/UX <br />
                  - Limpieza css.
                </div>
              </div>
            </div>
          </div>
    
          {/* 2 */}
          <div className="timeline__section">
            <div className="timeline__left">
              <div className="timeline__date">
                <div>alibhtty</div>
                <div>ABR 1, 2024</div>
              </div>
            </div>
            <div className="timeline__tracker">
              <div className="tracker"></div>
            </div>
            <div className="timeline__middle">
              <div className="timeline__bullet"></div>
            </div>
            <div className="timeline__right">
              <div>
                <div className="timeline__content">
                  - Responsive go/timeline <br />
                  - Fix Header Top <br />
                  - Fix Boton timeliine/back <br />
                  - Add Img de compartir Timeline.
                  <div className="story__section story__article-media story__article-media--captioned">
                    <a data-fancybox="gallery" data-src="./image/app/tv-mixtape.gif" data-caption="">
                      <img src="./image/app/tv-mixtape.gif" loading="lazy" alt="" />
                    </a>
                    <div className="story__article-media__caption">
                      <div className="story__texto">
                        Fix PWA 📱  &nbsp;– &nbsp; <a href="https://mixtaperadio.web.app" className="link">@mixtape.io</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          {/* 3 */}
          <div className="timeline__section">
            <div className="timeline__left">
              <div className="timeline__date">
                <div>alibhtty</div>
                <div>Ene 16, 2023</div>
              </div>
            </div>
            <div className="timeline__tracker">
              <div className="tracker"></div>
            </div>
            <div className="timeline__middle">
              <div className="timeline__bullet"></div>
            </div>
            <div className="timeline__right">
              <div>
                <div className="timeline__content">
                  Integraciones web
                  <div className="story__section story__article-media story__article-media--captioned">
                    <a data-fancybox="gallery" data-src="./img/seralpha.jpg" data-caption="">
                      <img loading="lazy" src="./image/app/deck.jpg" alt="" />
                    </a>
                    <div className="story__article-media__caption">
                      <div className="story__texto">
                        Nueva interfaz UI/UX
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          {/* 4 */}
          <div className="timeline__section time__ultimo">
            <div className="timeline__left">
              <div className="timeline__date">
                <div>alibhtty</div>
                <div>Dic 12, 2023</div>
              </div>
            </div>
            <div className="timeline__tracker">
              <div className="tracker"></div>
            </div>
            <div className="timeline__middle">
              <div className="timeline__bullet"></div>
            </div>
            <div className="timeline__right">
              <div>
                <div className="timeline__content">
                  end v.2.86

                  <br /><br /><br /><br /><br />
                </div>
              </div>
            </div>
          </div>

          
      </section>
      
    </div>
  );
};

export default Version;
