// src/components/Footer/Footer.tsx
import React from 'react';
import styles from './Footer.module.scss';
import logo from '.././../assets/logo.png';
import whatszapp from '.././../assets/whatszapp.png';
import instagram from '.././../assets/instagram.png';
import tiktok from '.././../assets/tiktok.png';
import arrow from '.././../assets/arrow.svg';


export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.brandInfo}>
          <img className={styles.logo} src={logo} alt="" />
        </div>

        <div className={styles.contactInfo}>
          <span> <img src={arrow} alt="" /> +55 (44) 9.9988-7766</span>
          <span><img src={arrow} alt="" /> notaseritmos@gmail.com</span>
          <span><img src={arrow} alt="" /> R. Anchieta, 279, Jussara - PR, 87230-000</span>
        </div>
        <div>
          <div className={styles.socialMedia}>
            <a href="https://wa.me/554497450037" target="_blank"><img src={whatszapp} alt="" /></a>
            <a href="https://www.instagram.com/wellingtonmesti?igsh=MXA3cnMwaWhsMXpycg==" target="_blank"><img src={instagram} alt="" /></a>
            <a href="https://www.tiktok.com/@notaseritmo?_t=ZM-8v6Ea1tNaek&_r=1" target="_blank"><img src={tiktok} alt="" /></a>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>Copyright © 2025 Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};