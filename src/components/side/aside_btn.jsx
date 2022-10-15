import React from 'react';
import styles from './aside_btn.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const AsideBtn = (props) => {
    return (
        <section className={styles.sidebtn}>
            <button className={styles.button}>
                <FontAwesomeIcon  className={styles.icon} icon={faBars} />
                </button>
            <button className={styles.button}>
                <FontAwesomeIcon className={styles.icon} icon={faHouse} />
                <div className={styles.ment}>홈</div></button>
            <button className={styles.button}>
                <FontAwesomeIcon className={styles.icon} icon={faCompass} />
                <div className={styles.ment}>탐색</div></button>
            <button className={styles.button}>
                <FontAwesomeIcon className={styles.icon} icon={faYoutube} />
                <div className={styles.ment}>구독</div></button>
            <button className={styles.button}>
                <FontAwesomeIcon className={styles.icon} icon={faFolder} />
                <div className={styles.ment}>보관함</div></button>
            <button className={styles.button}>
                <FontAwesomeIcon className={styles.icon} icon={faArrowDown} />
                <div className={styles.ment}>저장</div></button>
        </section>
    )
}

export default AsideBtn;