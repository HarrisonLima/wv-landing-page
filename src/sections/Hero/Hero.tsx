// src/sections/Hero/Hero.tsx
import React from 'react';
import styles from './Hero.module.scss';
import { Button } from '../../components/Button/Button';

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <h1>Aprenda violão do zero em 8 semanas!</h1>
      <p>Material didático • Método simplificado • Teoria musical</p>
      <Button>Acessar conteúdo</Button>
    </section>
  );
};