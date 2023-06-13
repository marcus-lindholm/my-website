import React, { useState } from 'react';
import styles from './BusinessCard.module.css';
import Image from 'next/image'

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
              <div className={styles.imgProfile}>
                <Image src="/profile1.jpeg" width='200px' height='200px' alt="profile picture" className={styles.imgProfile}/>
              </div>
            </div>
            <div className={styles.cardHalf}>
                <h4>MARCUS LINDHOLM</h4>
                <p>LINKÖPING UNIVERSITY</p>
                <p>INDUSTRIAL ENGINEERING AND MANAGEMENT</p>
                <div className={styles.socialContainer}>
                    <div className={styles.socialSubContainer}>
                        <Image src="/linkedin.png" alt="linkedin button" width='30px' height='30px' className={styles.imgSocial}/>
                        <a href="https://www.linkedin.com/in/marcus-lindholm/" target="_blank" rel="noreferrer">@marcus-lindholm</a>
                    </div>
                    <div className={styles.socialSubContainer}>
                        <Image src="/instagram.png" alt="instagram button" width='30px' height='30px' className={styles.imgSocial}/>
                        <a href="https://www.instagram.com/marcuslindholm_/" target="_blank" rel="noreferrer">@marcuslindholm_</a>
                    </div>
                    <div className={styles.socialSubContainer}>
                        <Image src="/github.png" alt="github button" width='30px' height='30px' className={styles.imgSocial}/>
                        <a href="https://www.github.com/marcusxenon" target="_blank" rel="noreferrer">@marcusxenon</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
