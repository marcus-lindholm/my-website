import React, { useState } from 'react';
import styles from './BusinessCard.module.css';

const BusinessCard = () => {
  const [flipped, setFlipped] = useState(false);

  const flipCard = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`${styles.card} ${flipped ? styles.flipped : ''}`} onClick={flipCard}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <h1>MARCUS LINDHOLM</h1>
          <p>INDUSTRIAL ENGINEERING AND MANAGEMENT | LINKÖPING UNIVERSITY</p>
          <p className={styles.bottomText}>TAP CARD FOR CONTACT INFORMATION &#8594;</p>
        </div>
        <div className={styles.cardBack}>
            <div className={styles.cardHalf}>
                <img src="/profile1.jpeg" alt="profile picture" className={styles.imgProfile}/>
            </div>
            <div className={styles.cardHalf}>
                <h4>MARCUS LINDHOLM</h4>
                <p>LINKÖPING UNIVERSITY</p>
                <p>INDUSTRIAL ENGINEERING AND MANAGEMENT</p>
                <div className={styles.socialContainer}>
                    <div className={styles.socialSubContainer}>
                        <img src="/linkedin.png" alt="linkedin button" className={styles.imgSocial}/>
                        <a href="https://www.linkedin.com/in/marcus-lindholm/" target="_blank">@marcus-lindholm</a>
                    </div>
                    <div className={styles.socialSubContainer}>
                        <img src="/instagram.png" alt="instagram button" className={styles.imgSocial}/>
                        <a href="https://www.instagram.com/marcuslindholm_/" target="_blank">@marcuslindholm_</a>
                    </div>
                    <div className={styles.socialSubContainer}>
                        <img src="/github.png" alt="github button" className={styles.imgSocial}/>
                        <a href="https://www.github.com/marcusxenon" target="_blank">@marcusxenon</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
