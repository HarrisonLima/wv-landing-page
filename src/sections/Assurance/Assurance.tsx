// src/sections/assurance/Assurance.tsx
import React from 'react';
import styles from './Assurance.module.scss';
import confirm from '../../assets/confirm.svg';
import selo from '../../assets/selo.png';

export const Assurance: React.FC = () => {
    return (
        <section className={styles.assurance}>
            <div className={styles.assuranceContent}>
                <div className={styles.assuranceCard}>
                    <div className={styles.assuranceHeader}>
                        <img src={selo} alt="" />
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.benefitsList}>
                        <span> <img src={confirm} alt="" />Garantia de 07 dias.</span>
                        <p>
                            Após adquirir o curso, você terá 7 dias para conhecer nosso conteúdo e assistir todas as aulas.
                        </p>
                        <p>Se nesse período, você achar que não é para você, não tem problema! É só entrar em contato com nossa equipe de suporte, que te devolvemos o seu dinheiro</p>

                    </div>
                </div>
            </div>
        </section >
    );
};