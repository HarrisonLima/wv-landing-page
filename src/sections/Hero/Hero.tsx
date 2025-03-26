// Hero.tsx
import React from 'react';
import styles from './Hero.module.scss';
import { Button } from '../../components/Button/Button';
import paleta from '../../assets/paleta.png';

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <h1>Aprenda violão do zero em <h1>8 semanas!</h1></h1>
      <div>
        <section>
          <span className={styles.arrowItem}>Material didático</span>
          <span className={styles.arrowItem}>Teoria musical</span>
          <span className={styles.arrowItem}>Método simplificado</span>
        </section>
        <section>
          <img src={paleta} alt="" />
        </section>
      </div>

      <section className="video-section">
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

      <Button>Acessar conteúdo</Button>
    </section>
  );
};