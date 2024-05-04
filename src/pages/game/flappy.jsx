import React from 'react';
import styles from './flappy.module.css';

const FlappyBird = () => {
    return (
        <div className={styles.container}>
            <div className={styles.background}></div>
            <div className={styles.gameContainer}>
                <iframe
                    src="./flappy/index.html"
                    title="Flappy Bird"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                />
            </div>
        </div>
    );
};

export default FlappyBird;
