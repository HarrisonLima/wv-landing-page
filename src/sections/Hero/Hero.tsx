// Hero.tsx
import React from 'react';
import styles from './Hero.module.scss';
import { ButtonAnchor } from '../../components/ButtonAnchor/ButtonAnchor';
import paleta from '../../assets/paleta.png';
import arrow from '../../assets/arrow.svg';

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <h1>Aprenda violão do zero em <h1>8 semanas!</h1></h1>
      <div>
        <section className={styles.heroFeatures}>
          <span><img src={arrow} alt="" /> Material didático</span>
          <span><img src={arrow} alt="" /> Teoria musical</span>
          <span><img src={arrow} alt="" /> Método simplificado</span>
        </section>
        <section>
          <img src={paleta} alt="" />
        </section>
      </div>

      <section className={styles.videoSection}>
        <video
          controls
          width="100%"
          poster="capa-do-video.jpg"
          preload="metadata"
        >
          <source src="meu-video.mp4" type="video/mp4"></source>
          <source src="meu-video.webm" type="video/webm"></source>
          Seu navegador não suporta vídeos HTML5.
        </video>
      </section>

      <ButtonAnchor href='https://mestiwellington.hotmart.host/captura?fbclid=PAY2xjawJVWLVleHRuA2FlbQIxMQABppHzQIKqY6fcISMAp1q-N15nWI9zn9Ml0kNUl-OvNqBC3DVK76x3mBia3Q_aem_UlvYz7WwSyc9R36LBrkj8g"'>Acessar conteúdo</ButtonAnchor>
    </section>
  );
};