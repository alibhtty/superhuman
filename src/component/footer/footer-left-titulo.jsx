import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from '../modal/modal';
import TextRegularM from '../text/text-regular-m';
import Marquee from 'react-fast-marquee';
import styles from "./footer-left.module.css";

function FooterLeft({ trackData }) {
    const [modalVisible, setModalVisible] = useState(false);

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <div className={styles.footerLeft}>
            <ImgBox trackImg={trackData.trackImg} openModal={() => setModalVisible(true)} />
            <SongDetails trackData={trackData} />
            <Modal isVisible={modalVisible} setIsVisible={setModalVisible} content={<ModalContent trackImg={trackData.trackImg} trackName={trackData.trackName} />} />
        </div>
    );
}

const ImgBox = ({ trackImg, openModal }) => (
    <div className={styles.imgBox} onClick={openModal}>
        <img src={trackImg} alt=" " />
    </div>
);

const SongDetails = ({ trackData }) => (
    <div className={styles.songDetails}>
        <div className={styles.marqueeWrapper}>
            <Marquee speed={13} delay={9} pauseOnHover={true} pauseOnClick={true}>
                <TextRegularM className={styles.Track}>{trackData.trackName}</TextRegularM>
            </Marquee>
        </div>
        <div className={styles.marqueeWrapper}>
            <Marquee speed={12} delay={6} pauseOnHover={true} pauseOnClick={true}>
                <TextRegularM className={styles.Artist}><small>{trackData.trackArtist} </small></TextRegularM>
            </Marquee>
        </div>
    </div>
);

const ModalContent = ({ trackImg, trackName }) => (
    <div className={styles.modalContent}>
        <img src={trackImg} alt=" " className={styles.modalImage} />
        <TextRegularM>{trackName}</TextRegularM>
    </div>
);

const mapStateToProps = (state) => ({
    trackData: state.trackData
});

export default connect(mapStateToProps)(FooterLeft);
