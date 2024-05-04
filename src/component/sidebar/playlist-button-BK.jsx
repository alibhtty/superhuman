import { NavLink } from "react-router-dom";
import TextBoldM from '../text/text-bold-m';
import styles from './playlist-button.module.css';

function PlaylistButton({ImgName, children, href}){
    return (
        <NavLink to={href}>
            <button className={styles.button}>
                <img src={`https://www.dropbox.com/s/3cgq8tyryssxl9m/star/${ImgName}.PNG?raw=1`} alt={ImgName} />
                {/* <img src={`https://spotify-clone-oguz3.web.app/image/${ImgName}.PNG`} alt={ImgName} /> */}
                <TextBoldM>{children}</TextBoldM>
            </button>
        </NavLink>
    );
}

export default PlaylistButton;