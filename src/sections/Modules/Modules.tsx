// src/sections/Modules/ModulesSection.tsx
import React from 'react';
import styles from './Modules.module.scss';
import modulo1 from '../../assets/modulo_1.png';
import modulo2 from '../../assets/modulo_2.png';
import modulo3 from '../../assets/modulo_3.png';
import modulo4 from '../../assets/modulo_4.png';

export const ModulesSection: React.FC = () => {
  return (
    <section className={styles.modulesContainer}>
      {/* Primeira Coluna */}
      <div className={styles.moduleColumn}>
        <div className={styles.modulePair}>
          <div className={styles.moduleCard}>
            <h3>Módulo 01</h3>
            <img src={modulo1} alt="" />
            <p>Conhecendo acordes</p>
          </div>
          <div className={styles.moduleCard}>
            <h3>Módulo 03</h3>
            <img src={modulo3} alt="" />
            <p>Teoria musical 01</p>
          </div>
        </div>
      </div>

      {/* Segunda Coluna */}
      <div className={styles.moduleColumn}>
        <div className={styles.modulePair}>

          <div className={styles.moduleCard}>
            <h3>Módulo 02</h3>
            <img src={modulo2} alt="" />
            <p>Ritmos e melodia</p>
          </div>
          <div className={styles.moduleCard}>
            <h3>Módulo 04</h3>
            <img src={modulo4} alt="" />
            <p>Introdução dedilhado</p>
          </div>
        </div>
      </div>
    </section>
  );
};