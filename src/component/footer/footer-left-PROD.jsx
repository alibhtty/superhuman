import { connect } from "react-redux";
import * as Icons from '../icons';
import TextRegularM from '../text/text-regular-m';
import IconButton from '../buttons/icon-button';
import Marquee from 'react-fast-marquee';

import styles from "./footer-left.module.css";

function FooterLeft(props){
    return (
        <div className={styles.footerLeft}>
            <ImgBox 
                trackData={props.trackData}
            />
            <SongDetails 
                trackData={props.trackData}
            />
            {/* <div className={styles.iconLike}>
            <ion-icon name="scan" activeicon={<Icons.LikeActive />} ></ion-icon>
            </div> */}
            {/* <IconButton icon={<Icons.Like />} activeicon={<Icons.LikeActive />}/> */}
            {/* <IconButton icon={<Icons.Corner />} activeicon={<Icons.Corner />}/> */}
        </div>
    );
}

function ImgBox({ trackData }){
    return (
        <div className={styles.imgBox}>
            <img src={trackData.trackImg} alt=" "/>
        </div>
    );
}

function SongDetails({ trackData }){
    return (
        <div className={styles.songDetails}>
            <Marquee speed={15} delay={9}> {/*  pauseOnHover={true} */}
                <TextRegularM className={styles.Track}>{trackData.trackName}</TextRegularM>
            </Marquee>
            <Marquee speed={12} delay={6}>
                <TextRegularM className={styles.Artist}><small>{trackData.trackArtist} </small></TextRegularM>
            </Marquee>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
      trackData: state.trackData
    };
};


export default connect(mapStateToProps)(FooterLeft);