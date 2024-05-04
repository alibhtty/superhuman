// import Navigation from './navigation'
import { Carrusel, CarruselActive, Corazon, CorazonActive, Home, HomeActive } from '../../component/icons';

// SONIDO BOTONES DE MENU
import ButtonWithSound from './button-with-sound'
import styles from './mobile-navigation.module.css'

/* function MobileNavigation() {
    return (
      <nav className={styles.MobileNav}>
        <Navigation />
      </nav>
    );
} */

function MobileNavigation() {
  return (
    <nav className={styles.MobileNav}>
      <div className={styles.BgNav}></div>

      <ButtonWithSound path="/" soundFile="./assets/audio/clicktape.mp3" Icon={Carrusel} ActiveIcon={CarruselActive} />
      <ButtonWithSound path="/search" soundFile="./assets/audio/clicktape.mp3" Icon={Corazon} ActiveIcon={CorazonActive} />
      <ButtonWithSound path="/library" soundFile="./assets/audio/clicktape.mp3" Icon={Home} ActiveIcon={HomeActive} />
    </nav>
  );
}
  
export default MobileNavigation;