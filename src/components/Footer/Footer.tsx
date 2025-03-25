// src/components/Footer/Footer.tsx
import React from 'react';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.brandInfo}>
          <h2 className={styles.logo}>notas@ritmo</h2>
          <p className={styles.schoolName}>ESCOLA DE MÚSICA</p>
        </div>

        <div className={styles.contactInfo}>
          <p><strong>+55 (44) 9.9988-7766</strong></p>
          <p>notaseritmos@gmail.com</p>
          <p>R. Anchieta, 279, Jussara - PR, 87230-000</p>
        </div>

        <div className={styles.copyright}>
          <p>Copyright © 2025 Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};