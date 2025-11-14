import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  to,
  href,
  target,
  rel,
}) => {
  const baseClasses = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`.trim();

  if (to) {
    return (
      <Link
        to={to}
        className={baseClasses}
        onClick={onClick}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        onClick={onClick}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

