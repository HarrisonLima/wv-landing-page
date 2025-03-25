// src/sections/Features/Features.tsx
import React from 'react';
import styles from './Features.module.scss';
import { CheckItem } from '../../components/CheckItem/CheckItem';

export const Features: React.FC = () => {
  const benefits = [
    { text: "Curso 100% online, assista quando e onde quiser.", checked: true },
    { text: "Garantia de 7 dias: ou seu dinheiro de volta!", checked: true },
    { text: "Material didático completo e exercícios práticos.", checked: true },
    { text: "Metodologia passo a passo para iniciantes.", checked: true },
    { text: "Suporte de professores para tirar suas dúvidas.", checked: true }
  ];

  return (
    <section className={styles.features}>
      <h2>Por que escolher esse curso?</h2>
      {benefits.map((item, index) => (
        <CheckItem key={index} checked={item.checked}>
          {item.text}
        </CheckItem>
      ))}
    </section>
  );
};