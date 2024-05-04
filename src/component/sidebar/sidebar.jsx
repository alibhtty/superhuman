import useMousePosition from '../../hooks/useMousePosition';

// SONIDO BOTONES DE MENU
//import ButtonWithSound from './button-with-sound';
//import { Carrusel, CarruselActive, Corazon, CorazonActive, Home, HomeActive } from '../../component/icons';

import {Logo} from '../icons';
import Playlist from './playlist';
import Navigation from './navigation'

import styles from './sidebar.module.css';
import { useEffect, useState } from 'react';

function Sidebar() {
  const[width, SetWidth] = useState(220); /* 236 */
  const [isMouseDown, setisMouseDown] = useState(false);
  const { x } = useMousePosition();

    useEffect(() => {
      if (!isMouseDown) return false;
  
      const handleMove = () => {
        if(x > 200 && x < 300){
          SetWidth(x);
        }
      };
  
      const handleUp = () => {
        setisMouseDown(false);
      };
  
      document.addEventListener("mousemove", handleMove);
      document.addEventListener("mouseup", handleUp);
      return () => {
        document.removeEventListener("mousemove", handleMove);
        document.removeEventListener("mouseup", handleUp);
      };
    });

    return (
      <nav className={styles.SideNavbar} style={{width: `${width}px`}}>
        <div className={styles.Fixed}>
          <div className={styles.logoNav}>
              <Logo/>
          </div>
          <div >
              <Navigation />
              {/* <ButtonWithSound path="/" soundFile="https://alibhtty.web.app/game/morder.mp3" Icon={Carrusel} ActiveIcon={CarruselActive} />
              <ButtonWithSound path="/search" soundFile="https://alibhtty.web.app/game/morder.mp3" Icon={Corazon} ActiveIcon={CorazonActive} />
              <ButtonWithSound path="/library" soundFile="https://alibhtty.web.app/game/morder.mp3" Icon={Home} ActiveIcon={HomeActive} /> */}
          </div>
          <div>
              <Playlist />
          </div>
        </div>
        <div 
            className={`${styles.changeWidth} ${isMouseDown ? styles.ActiveChange : ''}`}
            onMouseDown={() => {
              setisMouseDown(true);
            }}
        ></div>
      </nav>
    );
}
  
export default Sidebar;