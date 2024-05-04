// footer-left.jsx
import { useState } from "react";
import { connect } from "react-redux";
import Modal from '../modal/modal';
import * as Icons from '../icons';
import TextRegularM from '../text/text-regular-m';
import IconButton from '../buttons/icon-button';
import Marquee from 'react-fast-marquee';
import styles from "./footer-left.module.css";

function FooterLeft(props){
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <div className={styles.footerLeft}>
            <ImgBox 
                trackData={props.trackData}
                openModal={openModal}
            />
            <SongDetails 
                trackData={props.trackData}
            />
            <Modal isVisible={modalVisible} setIsVisible={setModalVisible} content={<ModalContent trackImg={props.trackData.trackImg} />} />
        </div>
    );
}

function ImgBox({ trackData, openModal }){
    return (
        <div className={styles.imgBox} onClick={openModal}>
            <img src={trackData.trackImg} alt=" " />
        </div>
    );
}

function SongDetails({ trackData }){
    return (
        <div className={styles.songDetails}>
            <Marquee speed={15} delay={9}>
                <TextRegularM className={styles.Track}>{trackData.trackName}</TextRegularM>
            </Marquee>
            <Marquee speed={12} delay={6}>
                <TextRegularM className={styles.Artist}><small>{trackData.trackArtist} </small></TextRegularM>
            </Marquee>
        </div>
    );
}

// Componente para el contenido del modal
function ModalContent({ trackImg }) {
    return (
        <div className={styles.modalContent}>
            <img src={trackImg} alt=" " className={styles.modalImage} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      trackData: state.trackData
    };
};

export default connect(mapStateToProps)(FooterLeft);
