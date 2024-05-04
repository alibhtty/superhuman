import styles from './text-bold-m.module.css'

function TextBoldBottomM({children}){
    return (
        <buttom className={styles.text}>
            {children}
        </buttom>
    );
}

export default TextBoldBottomM;