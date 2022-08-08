import React from 'react';
import styles from '../styles/FooterBanner.module.css';

const FooterBanner = ({ footerBanner: { smallText, midText, desc } }) => {
  return (
    <div className={styles.footerBannerContainer}>
      <div className={styles.bannerDesc}>
        <div className='right'>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
