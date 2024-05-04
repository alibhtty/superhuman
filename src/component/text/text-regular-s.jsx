import styles from './text-regular-s.module.css'

function TextRegularS({children}){
    return (
        <p className={styles.text}>
            {children}
        </p>
    );
}

export default TextRegularS;