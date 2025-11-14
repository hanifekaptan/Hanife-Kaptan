
import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  const cardClasses = `${styles.card} ${className || ''}`;

  return <div className={cardClasses}>{children}</div>;
};

export default Card;