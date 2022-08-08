import React from 'react';
import styles from '../styles/Footer.module.css';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <p>2022 Usama Lodhi Software Developer</p>
      <p className={styles.footerContainerIcons}>
        <a href='https://github.com/usamalodhi' target='blank'>
          <AiFillGithub />
        </a>
        <a href='https://www.linkedin.com/in/usama-lodhi/' target='blank'>
          <AiFillLinkedin />
        </a>
      </p>
    </div>
  );
};

export default Footer;
