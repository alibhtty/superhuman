import * as Icons from '../component/icons';
import Topnav from '../component/topnav/topnav';
import TitleL from '../component/text/title-l';
import TitleM from '../component/text/title-m'
import PlaylistCardA from '../component/cards/playlist-card-a';
import PlaylistCardB from '../component/cards/playlist-card-b';
import PlaylistCardS from '../component/cards/playlist-card-s';
import PlaylistCardM from '../component/cards/playlist-card-m';
import BannerImage from '../component/banner/banner-image';
import SocialImage from '../component/social/social-image';
// import SplashScreen from '../component/splash/splash-preload';
/* import BannerImage from './BannerImage'; */

import styles from "./home.module.css";

import { PLAYLIST, ARTISTS } from '../data/index';
import { useState, useEffect } from 'react';

function Home(){
    // Define la función shuffleArray
    function shuffleArray(array) {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    }
  
// Usa el hook useState para crear un estado para las listas barajadas
const [shuffledPlaylist, setShuffledPlaylist] = useState([]);
const [shuffledArtists, setShuffledArtists] = useState([]);

// Usa el hook useEffect para barajar las listas cuando se monta el componente
useEffect(() => {
  setShuffledPlaylist(shuffleArray(PLAYLIST));
  setShuffledArtists(shuffleArray(ARTISTS)); // Baraja las listas de artistas
}, []);

    
    return (

            // BARAJAR ARRAYS
        /* function shuffleArray(array) {
           for (let i = array.length - 1; i > 0; i--) {
             const j = Math.floor(Math.random() * (i + 1));
             [array[i], array[j]] = [array[j], array[i]];
           }
         }
        shuffleArray(PLAYLIST); */
        
        // BARAJAR EXCEPTO EL PRIMERO
        /* function shuffleArrayExceptFirst(array) {
           for (let i = array.length - 1; i > 1; i--) {
             const j = Math.floor(Math.random() * (i - 1)) + 1;
             [array[i], array[j]] = [array[j], array[i]];
           }
         }
         shuffleArrayExceptFirst(PLAYLIST); */


        <div className={styles.Home}>
            <div className={styles.HoverBg}></div>
            <div className={styles.Bg}></div>

            <Topnav />
            <div className={styles.Content}>
                <section>

                    {/* <div className={styles.SectionTitle2}>
                      <TitleL>
                        <div className={styles.marquee}>
                            <b className={styles.Content}> MIXTAPE mix stream djs  </b>
                        </div>
                      </TitleL>
                    </div> */}

                    {/* <div className={styles.SectionTitle2}>
                      <TitleL>
                        <div className={styles.marquee}>
                          <b className={styles.Content}> MIXTAPE &nbsp; &nbsp; &nbsp; MIXTAPE &nbsp; &nbsp; &nbsp; MIXTAPE </b>
                        </div>
                      </TitleL>
                    </div> */}


                     <div className={styles.SectionTitle}>
                        <TitleL>Hoy en&nbsp; <b className={styles.Content}> MIXTAPE ▾</b> </TitleL>
                    </div>

                    {<div className={styles.SectionCards}>
                      {shuffledPlaylist.slice(0, 11).map((item) => { // Usa shuffledPlaylist
                        return (
                          <PlaylistCardS 
                            key={item.title}
                            data={item}
                          />
                        );
                      })}
                    </div>}

                    {/* <div className={styles.SectionCards}>
                        {PLAYLIST.slice(0, 12).map((item) => {
                            return (
                                <PlaylistCardS 
                                    key={item.title}
                                    data={item}
                                />
                            );
                        })}
                    </div> */}
                </section>

                <section>
                    <div className={styles.SectionTitle}>
                        <TitleL>En tarima</TitleL>
                    </div>

                    <div className={styles.SectionCardsA}>
                         {shuffledArtists.slice(0, 11).map((item) => { // Usa shuffledArtists
                           return (
                             <PlaylistCardA 
                               key={item.title}
                               data={item}
                             />
                           );
                         })}
                       </div>
                </section>

                {/* <section>
                    <div className={styles.SectionTitle}>
                        <TitleL>En tarima</TitleL>
                    </div>

                    <div className={styles.SectionCardsA}>
                        {PLAYLIST.slice(12, 20).map((item) => {
                            return (
                                <PlaylistCardA 
                                    key={item.title}
                                    data={item}
                                />
                            );
                        })}
                    </div>
                </section> */}

                <section>
                    <BannerImage image="https://mix-tape.web.app/image/app/meta-mixtape.jpg" text="mix-tape.web.app" subtitle="🔗 Versión beta disponible" description="Promocionado" url="https://alibhtty.github.io/mixtape-install/"/>
                </section>

                <section>
                    <div className={styles.SectionTitle}>
                        <TitleL>Discos</TitleL>
                    </div>

                    <div className={styles.SectionCardsB}>
                        {PLAYLIST.slice(8, 12).map((item) => {
                            return (
                                <PlaylistCardB 
                                    key={item.title}
                                    data={item}
                                />
                            );
                        })}
                    </div>
                </section>

                {/* <section>
                    <BannerImage image="https://mix-tape.web.app/image/add/add01.jpg" text="callsaul.com" subtitle="Anúnciate aquí" description="Promocionado" url="https://instagram.com/ali.bhtty"/>
                </section> */}

                <section>
                    {/* <a className={styles.BtnContainer} href='https://donate.stripe.com/eVa6sicxD3Nh5yw6or' target='_blank'>
                        <button className={styles.ProfileBtn}>
                            <Icons.Donate />
                            HACER UNA DONACIÓN
                        </button>
                    </a> */}

                    <a className={styles.BtnContainer} href="https://t.me/alibhtty" target="_blank">  {/* https://api.whatsapp.com/send?phone=34602316998&text=Hola 👋 */}
                        <button className={styles.ProfileBtn2}>
                            Enviar mensaje directo
                         </button>
                    </a>

                    
                </section>

                <section>
                    <div className={styles.SectionTitle}>
                        <TitleM>Reproducido recientemente</TitleM>
                    </div>
                    
                    <div className={styles.SectionCardsMedium}>
                        {shuffledPlaylist.slice(2, 10).map((item) => {
                            return (
                                <PlaylistCardM 
                                    key={item.title}
                                    data={item}
                                />
                            );
                        })}  {/* PLAYLIST */}
                    </div>

                    {/* <section>
                        <div className={styles.socialBtn}>
                            <a className={styles.socialBox}>
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                            <ion-icon name="logo-instagram"></ion-icon>
                            <SocialImage image="https://mix-tape.web.app/image/app/instagram.jpg" text="mixtape.io" subtitle="@mixtape.io" description="Promocionado" url="https://instagram.com/ali.bhtty"/>
                        </div>
                    </section> */}

                    <div className={styles.SectionCred}>
                        <div>4B & CO. <br></br> <b>v.3.2</b>  </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;