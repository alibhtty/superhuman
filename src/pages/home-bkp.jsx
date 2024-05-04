import React, { useEffect } from 'react';

import Topnav from '../component/topnav/topnav';
import TitleL from '../component/text/title-l';
import TitleM from '../component/text/title-m'
import PlaylistCardA from '../component/cards/playlist-card-a';
import PlaylistCardB from '../component/cards/playlist-card-b';
import PlaylistCardS from '../component/cards/playlist-card-s';
import PlaylistCardM from '../component/cards/playlist-card-m';

import styles from "./home.module.css";

import { PLAYLIST } from '../data/index'
  

function Home(){
    return (
        <div className={styles.Home}>
            <div className={styles.HoverBg}></div>
            <div className={styles.Bg}></div>

            <Topnav />
            <div className={styles.Content}>
                <section>
                    <div className={styles.SectionTitle}>
                        <TitleL>Para ti &nbsp;🎧 <b className={styles.Content}> MIXTAPE</b> </TitleL>
                    </div>

                    <div className={styles.SectionCards}>
                        {PLAYLIST.slice(0, 12).map((item) => {
                            return (
                                <PlaylistCardS 
                                    key={item.title}
                                    data={item}
                                />
                            );
                        })}
                    </div>
                </section>

                <section>
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
                </section>

                <section>
                    <div className={styles.SectionTitle}>
                        <TitleL>Discos</TitleL>
                    </div>

                    <div className={styles.SectionCardsB}>
                        {PLAYLIST.slice(11, 14).map((item) => {
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

                    <div className={styles.SectionCred}>
                        <arguments>4B & CO. <br></br> <b>v.12.4</b>  </arguments>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;