import React from 'react';
import styles from './aside_btn.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const AsideBtn = (props) => {
    return (
        <section className={styles.sidebtn}>
            <button className={styles.button}>
                <FontAwesomeIcon icon={faBars} />
                </button>
            <button className={styles.button}>
                <i />
                홈</button>
            <button className={styles.button}>
                <i/>
                탐색</button>
            <button className={styles.button}>
                <i />
                Shores</button>
            <button className={styles.button}>
                <i />
                구독</button>
            <button className={styles.button}>
                <i />
                보관함</button>
        </section>
    )
}

export default AsideBtn;