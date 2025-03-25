// src/sections/Modules/ModulesSection.tsx
import React from 'react';
import styles from './Modules.module.scss';

export const ModulesSection: React.FC = () => {
  return (
    <section className={styles.modulesContainer}>
      {/* Primeira Coluna */}
      <div className={styles.moduleColumn}>
        <div className={styles.modulePair}>
          <div className={styles.moduleCard}>
            <h3>Módulo 01</h3>
            <p>Conhecendo acordes</p>
          </div>
          <div className={styles.moduleCard}>
            <h3>Módulo 03</h3>
            <p>Teoria musical 01</p>
          </div>
        </div>
      </div>

      {/* Segunda Coluna */}
      <div className={styles.moduleColumn}>
        <div className={styles.modulePair}>
          <div className={styles.moduleCard}>
            <h3>Módulo 02</h3>
            <p>Ritmos e melodia</p>
          </div>
          <div className={styles.moduleCard}>
            <h3>Módulo 04</h3>
            <p>Introdução dedilhado</p>
          </div>
        </div>
      </div>
    </section>
  );
};