// src/sections/Pricing/PricingSection.tsx
import React from 'react';
import styles from './Pricing.module.scss';
import { CheckItem } from '../../components/CheckItem/CheckItem';

export const PricingSection: React.FC = () => {
  return (
    <section className={styles.pricing}>
      <div className={styles.priceTag}>
        <h2>R$ 9,90 <span>/ 1x sem juros</span></h2>
      </div>

      <div className={styles.benefitsList}>
        <CheckItem checked={false}>Acesso imediato ao curso completo</CheckItem>
        <CheckItem checked={false}>Apostilas, exercícios práticos e cifras</CheckItem>
        <CheckItem checked={false}>Garantia de 07 dias</CheckItem>
        <CheckItem checked={false}>Bonus: Aprendemos sobre fingerstyle</CheckItem>
      </div>

      <button className={styles.ctaButton}>Aprender Violão Agora!</button>
    </section>
  );
};