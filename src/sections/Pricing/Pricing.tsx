// src/sections/Pricing/PricingSection.tsx
import React from 'react';
import styles from './Pricing.module.scss';
import confirm from '../../assets/confirm.svg';
import fire from '../../assets/fire.svg';
import { ButtonAnchor } from '../../components/ButtonAnchor/ButtonAnchor';

export const PricingSection: React.FC = () => {
  return (
    <section className={styles.pricing}>
      <div className={styles.pricingContent}>
        <div className={styles.priceCard}>
          <div className={styles.priceHeader}>
            <div className={styles.priceTag}>
              <h3>R$ 9,90</h3>
              <span>/ 1x sem juros</span>
            </div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.benefitsList}>
            <span> <img src={confirm} alt="" />Acesso imediato ao curso completo</span>
            <span> <img src={confirm} alt="" />Apostilas, exercícios práticos e cifras</span>
            <span> <img src={confirm} alt="" />Garantia de 07 dias</span>
            <span> <img src={fire} alt="" />Bônus: Aprendemos sobre fingerstyle</span>
            
          </div>
          <div className={styles.divider}></div>

          <ButtonAnchor href='https://mestiwellington.hotmart.host/captura?fbclid=PAY2xjawJVWLVleHRuA2FlbQIxMQABppHzQIKqY6fcISMAp1q-N15nWI9zn9Ml0kNUl-OvNqBC3DVK76x3mBia3Q_aem_UlvYz7WwSyc9R36LBrkj8g"'>Aprender Violão Agora!</ButtonAnchor>
        </div>
      </div>
    </section>
  );
};