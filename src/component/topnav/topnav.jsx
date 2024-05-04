import React, { useEffect, useState } from "react";
import PrevPageBtn from '../buttons/prev-page-button';
import SearchBox from './search-box';
import LibraryTabBtn from './library-tab-btn';
import { Link, useLocation } from 'react-router-dom';
import styles from './topnav.module.css';
import flappyIcon from './flappy.png';
import Marquee from 'react-fast-marquee';
import InstallModal from './../modal/install'; // Importa el componente InstallModal

function Topnav({ search = false, tabButtons = false }) {
    const [inReadyForInstall, setIsReadyForInstall] = useState(false);
    const [isPortrait, setIsPortrait] = useState(window.matchMedia("(orientation: portrait)").matches);
    const [showInstallModal, setShowInstallModal] = useState(false); // Estado para controlar la visibilidad del modal
    const location = useLocation();

    useEffect(() => {
        window.addEventListener("beforeinstallprompt", (event) => {
            event.preventDefault();
            window.deferredPrompt = event;
            setIsReadyForInstall(true);
            // Muestra el modal de instalación automáticamente al recargar la página
            setShowInstallModal(true);
        });

        const handleOrientationChange = () => {
            setIsPortrait(window.matchMedia("(orientation: portrait)").matches);
        };

        window.addEventListener("resize", handleOrientationChange);

        return () => {
            window.removeEventListener("resize", handleOrientationChange);
        };
    }, []);

    async function downloadApp() {
        const promptEvent = window.deferredPrompt;
        if (!promptEvent) {
            console.log("Oops, no prompt event guardado en window");
            return;
        }
        promptEvent.prompt();
        const result = await promptEvent.userChoice;
        console.log("👍", "userChoice", result);
        window.deferredPrompt = null;
        setIsReadyForInstall(false);
    }

    return (
        <nav className={styles.Topnav}>
            <div className={styles.navContainer}>
                <span>
                    <PrevPageBtn />
                    {search && <SearchBox />}
                    {tabButtons && <LibraryTabBtn />}
                </span>

                <div className={styles.rightButtons} style={{ marginLeft: 'auto' }}>
                    {location.pathname === "/" && (
                        <Link to="/timeline">
                            <button className={styles.TitleBtn}>
                                <div className={styles.marqueeContainer}>
                                    <Marquee gradient={false} speed={30} pauseOnHover={true}>
                                        <span>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mixtape radio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        STREAM DJS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   <b className={styles.fontDos}>BASS MUSIC, DnB, DUBSTEP, URBAN</b>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        2024 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mixtape radio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🔥 </span>
                                    </Marquee>
                                </div>
                            </button>
                        </Link>
                    )}

                    {location.pathname === "/" && isPortrait && (
                        <Link to="/flappy">
                            <button className={styles.FlappyBtn}>
                                <img src={flappyIcon} alt="Flappy" className={styles.flappyIcon} />
                            </button>
                        </Link>
                    )}

                    <Link to="/news">
                        <button className={`${styles.ProfileBtn} ${styles.rightmostButton}`}>
                            4B
                        </button>
                    </Link>

                    {/* Renderizar el modal de instalación */}
                    <InstallModal isVisible={showInstallModal} setIsVisible={setShowInstallModal} content={<button onClick={downloadApp} className={styles.instalarBtn}>INSTALAR</button>} />
                </div>
            </div>
        </nav>
    );
}

export default Topnav;
