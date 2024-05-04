import TitleS from '../text/title-s';
import TextBoldM from '../text/text-bold-m';

import styles from "./playlist-footer.module.css";

function PlaylistFooter({data}) {
	return (
        <div className={styles.footerDetails}>

            <div className={styles.imgBox}>
                <img src={data.bannerUno} />
                {/* <TitleS>{data.type}</TitleS> */}
                {/* <h1>{data.title}</h1> */}
            </div>

            <div className={styles.textBox}>
                <div className={styles.Artist}>
                    <figure>
                        <img src={data.artistImgUrl} />
                    </figure>
                    <div className={styles.boxBio}>
                        <TextBoldM className={styles.bioTitle}>{data.artistBio}</TextBoldM>
                    </div>
                </div>
            </div>

            
        </div>
	);
}

export default PlaylistFooter;
