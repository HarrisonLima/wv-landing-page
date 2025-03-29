// src/components/Button/Button.tsx
import React from 'react';
import styles from './ButtonAnchor.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string; // Para segurança (ex: 'noopener noreferrer')
}

export const ButtonAnchor: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  href,
  target,
  rel,
  disabled = false
}) => {
  return (
    <a
      className={styles.button}
      type={type}
      onClick={onClick}
      href={disabled ? undefined : href} // Desabilita o href se disabled=true
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : rel}
      aria-disabled={disabled}
      style={disabled ? { pointerEvents: 'none', opacity: 0.6 } : undefined}
    >
      {children}
    </a>
  );
};