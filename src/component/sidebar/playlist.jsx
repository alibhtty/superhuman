import { Link } from "react-router-dom";

import * as Icons from '../icons';
import styles from './playlist.module.css';

import TitleS from '../text/title-s';
import TextRegularM from '../text/text-regular-m';
import PlaylistButton from './playlist-button';
import { PLAYLISTBTN } from '../../constants';
import { PLAYLIST } from '../../data';

function Playlist() {
    return (
      <div className={styles.Playlist}>
        <TitleS>Catálogo</TitleS> {/*  Listas de Reproducción */}

        <div>
          {PLAYLISTBTN.map((playlist) => {
            return (
                <PlaylistButton 
                  href={playlist.path} 
                  ImgName={playlist.ImgName}
                  key={playlist.title}
                >
                  {playlist.title}
                </PlaylistButton>
            );
          })}
        </div>

        <hr className={styles.hr}/>

        {/* <div>
          {PLAYLIST.filter((item) => item.type === 'playlist').map((list) => {
            return (
              <Link to={`/playlist/${list.link}`} key={list.title}>
                  <TextRegularM>{list.title}</TextRegularM>
              </Link>
            );
          })}
        </div> */}

        <div>
          {PLAYLIST.filter((item) => item.type === 'playlist').slice(0, 6).map((list) => {
            return (
              <Link to={`/playlist/${list.link}`} key={list.title}>
                  <TextRegularM>{list.title}</TextRegularM>
              </Link>
            );
          })}
        </div>


        {/* DONACION */}
        <a href='https://donate.stripe.com/eVa6sicxD3Nh5yw6or' target='_blank'>
                <button className={styles.ProfileBtn}>
                  {/* <b className={styles.minibtn}>Hacer una</b> <br /> */}
                  <Icons.Donate />
                    <b>HACER UNA DONACIÓN</b>
                </button>
          </a>




          <div className={styles.SectionCred}>
                <Link className={styles.SectionTermsItem} to="/news" > Noticias </Link>
                <Link className={styles.SectionTermsItem} to="/terms" > Políticas & Terminos</Link>
          </div>

        
      </div>
    );
}
  
export default Playlist;