// src/components/CheckItem/CheckItem.tsx
import React from 'react';
import styles from './CheckItem.module.scss';

interface CheckItemProps {
  checked: boolean;
  children: React.ReactNode;
  onChange?: (checked: boolean) => void;
}

export const CheckItem: React.FC<CheckItemProps> = ({ 
  checked, 
  children,
  onChange 
}) => {
  return (
    <div className={styles.checkItem}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        id={`check-${Math.random().toString(36).substr(2, 9)}`}
      />
      <label htmlFor={`check-${Math.random().toString(36).substr(2, 9)}`}>
        {children}
      </label>
    </div>
  );
};