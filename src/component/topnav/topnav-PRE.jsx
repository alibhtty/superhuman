import React, {useEffect} from "react"
import PrevPageBtn from '../buttons/prev-page-button';
/* import NextPageBtn from '../buttons/next-page-button'; */
import SearchBox from './search-box';
import LibraryTabBtn from './library-tab-btn';
import { Link } from 'react-router-dom';

import styles from './topnav.module.css';

function Topnav({search = false, tabButtons = false}) {

    // LO DE ABAJO ES EL BOTON INSTALAR PWA – PARA CUANDO ESTÉ DISCPONIBLE 
    const [inReadyForInstall, setIsReadyForInstall] =
    React.useState(false);

    useEffect(() => {
        window.addEventListener("beforeinstallprompt",
        (event) => {
            // Prevent the mini-infobar from appering on mobile.
            event.preventDefault();
            console.log("👍", "beforeinstallprompt", event);
            // Stash the event so it can be triggered later.
            window.deferredPrompt = event;
            // Remove the 'hidden class from the install button container.
            setIsReadyForInstall(true);
        });
    }, []);


    async function downloadApp() {
        console.log("👍", "butInstall-clicker");
        const promptEvent = window.deferredPrompt;
        if (!promptEvent) {
            // The deferred prompt ins't available.
            console.log("oops, no prompt event guardado en window");
            return;
        }
        // Show the install prompt.
        promptEvent.prompt();
        // Log the result
        const result = await promptEvent.userChoice;
        console.log("👍", "userChoice", result);
        // Reset the deferred prompt variable, since
        // prompt() can only be called once.
        window.deferredPrompt = null;
        // Hide the install button.
        setIsReadyForInstall(false);
    }



    return (
      <nav className={styles.Topnav}>
          <div>
                <span>
                    <PrevPageBtn />
                    {/* <NextPageBtn />     ----boton adelante-----      */}
                    { search ? <SearchBox /> : '' }
                    { tabButtons ? <LibraryTabBtn /> : '' }
                </span>
                
                
                <a className={styles.installContainer}>
                   {inReadyForInstall && <button onClick={downloadApp} className={styles.instalarBtn}>
                        INSTALAR
                    </button>
                    }

                </a>

                {/* <div className={styles.TitleMix}>Mixtape✦</div> */}

                {/* <Link to="/descubre" >      
                    <button className={styles.ProfileBtn}>
                        ✦
                    </button>
                </Link> */}

                <Link to="/flappy" >      
                    <button className={styles.FlappyBtn}>
                        🐥
                    </button>
                </Link>
                <Link to="/news" >      
                    <button className={styles.ProfileBtn}>
                        4B
                    </button>
                </Link>

          </div>
      </nav>
    );
}
  
export default Topnav;