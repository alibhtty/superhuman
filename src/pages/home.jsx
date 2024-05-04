import { Link } from 'react-router-dom';
//import * as Icons from '../component/icons';
import Topnav from '../component/topnav/topnav';
import TitleL from '../component/text/title-l';
import TitleM from '../component/text/title-m';
import PlaylistCardG from '../component/cards/playlist-card-g';
import PlaylistCardA from '../component/cards/playlist-card-a';
import PlaylistCardB from '../component/cards/playlist-card-b';
import PlaylistCardS from '../component/cards/playlist-card-s';
import PlaylistCardM from '../component/cards/playlist-card-m';
import BannerUrl from '../component/banner/banner-url';
import BannerLink from '../component/banner/banner-link';
import SocialImage from '../component/social/social-image';

import styles from "./home.module.css";
import { PLAYLIST } from '../data/index';
//import { useState, useEffect } from 'react';

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function Home(){

    //const songsPlaylist1 = useGeneratePlaylist('playlist1');
    //const songsPlaylist2 = useGeneratePlaylist('playlist2');

    const playlistToShuffle1 = PLAYLIST.slice(0, 10);
    const shuffledPlaylist1 = shuffleArray([...playlistToShuffle1]);

    const playlistToShuffle2 = PLAYLIST.slice(16, 23);
    const shuffledPlaylist2 = shuffleArray([...playlistToShuffle2]);

    const playlistToShuffle3 = PLAYLIST.slice(23, 24);
    const shuffledPlaylist3 = shuffleArray([...playlistToShuffle3]);

    //const remainingPlaylist = PLAYLIST.slice(19);

    return (
        <div className={styles.Home}>
            <div className={styles.HoverBg}></div>
            <div className={styles.Bg}></div>

            <Topnav />
            <div className={styles.Content}>  

                <section>
                    {<div className={styles.SectionTitle}>
                        <TitleL> <b className={styles.Content}>   </b> </TitleL> {/* MIXTAPE✦ */}
                    </div>}

                    <div className={styles.SectionCardsG}>
                        {shuffledPlaylist3.map((item, index) => {
                            return (
                                <div 
                                    key={item.title}
                                    style={{animationDelay: `${index * 0.35}s`}}
                                    className="fade-in2"
                                >
                                    <PlaylistCardG 
                                        data={item}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </section>


                <section>
                    <div className={styles.SectionTitle}>
                        <TitleL>Colecciones</TitleL>
                    </div>

                    <div className={styles.SectionCards}>
                        {shuffledPlaylist1.map((item, index) => {
                            return (
                                <div 
                                    key={item.title}
                                    style={{animationDelay: `${index * 0.35}s`}} // Añade un retraso de 0.1s por cada tarjeta
                                    className="fade-in"
                                >
                                    <PlaylistCardS 
                                        data={item}
                                    />
                                </div>
                            );
                        })}
                    </div>

                </section>

                <section>
                    <div className={styles.SectionTitle}>
                        <TitleL>En tarima</TitleL>
                    </div>

                    <div className={styles.SectionCardsA}>
                        {shuffledPlaylist2.map((item, index) => {
                            return (
                                <div 
                                    key={item.title}
                                    style={{animationDelay: `${index * 0.35}s`}}
                                    className="fade-in2"
                                >
                                    <PlaylistCardA 
                                        data={item}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </section>

                <section>
                    <BannerUrl image="./assets/icons/meta-mixtape.jpg" text="mixtaperadio.web.app" subtitle="🔗 Versión beta disponible" description="Promocionado" url="https://alibhtty.github.io/mixtape-install/"/>
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


                <section>
                        <a className={styles.BtnContainer}>  {/* href="https://t.me/alibhtty" target="_blank" */}
                            <button className={styles.BannerDescripcion}>
                                Editorializamos todo nuestro <br /> catálogo.  <b className={styles.TextoDescripcion}>Sin algoritmos.</b>
                             </button>
                        </a>
                </section>


                <section>
                    <div className={styles.SectionTitle}>
                        <TitleM>Reproducido recientemente</TitleM>
                    </div>
                    
                    <div className={styles.SectionCardsMedium}>
                        {PLAYLIST.slice(2, 10).map((item) => {
                            return (
                                <PlaylistCardM 
                                    key={item.title}
                                    data={item}
                                />
                            );
                        })}
                    </div>

                    <section>
                        {/* <a className={styles.BtnContainer} href='https://donate.stripe.com/eVa6sicxD3Nh5yw6or' target='_blank'>
                            <button className={styles.ProfileBtn}>
                                <Icons.Donate />
                                HACER UNA DONACIÓN
                            </button>
                        </a> */}
    
                        <a className={styles.BtnContainer} href="https://t.me/alibhtty" target="_blank">  {/* https://api.whatsapp.com/send?phone=34602316998&text=Hola 👋 */}
                            <button className={styles.ProfileBtn2}>
                                Enviar mensaje directo <br /> <b className={styles.TextoProfileBtn2}> (FEEDBACK & RECOMENDACIONES)</b>
                             </button>
                        </a>
                    </section>

                    {/* <section>
                        <BannerUrl image="/image/app/cd.gif" text="Actualizaciones" subtitle="🔧 Control de Versiones" description="Timeline" url="./version/index.html"/>
                    </section> */}
                    
                    <section>
                       <BannerLink to="/version" image="./image/app/cd.gif" text="Actualizaciones" subtitle="🔧 Control de Versiones" description="Timeline" />
                     </section>

                    <div className={styles.SectionCred}>
                        <div className={styles.SectionCorp}>4B & CO. <br></br> <b>v3.14</b>  </div>
                        <div className={styles.SectionTerms}>
                            {/* <Link className={styles.SectionTermsItem} to="/news" > Control de Versiones</Link> */}
                            <Link className={styles.SectionTermsItem} to="/news" > Noticias en Mixtape</Link>
                            <Link className={styles.SectionTermsItem} to="/terms" > Políticas & Terminos</Link>
                            <Link className={styles.SectionTermsItem} to="/flappy" > Flappy Bird</Link>
                            {/* <Link className={styles.SectionTermsItem} to="/timeline" > Timeline</Link> */}
                            {/* <Link className={styles.SectionTermsItem} to="/descubre" > Descubre</Link> */}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;