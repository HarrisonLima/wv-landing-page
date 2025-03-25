// src/components/Button/Button.tsx
import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  type = 'button',
  disabled = false
}) => {
  return (
    <button 
      className={styles.button} 
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};