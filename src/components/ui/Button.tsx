import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  href,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 border text-sm font-medium rounded-sm transition-colors duration-200';
  
  const variants = {
    primary: 'border-transparent text-white bg-accent hover:bg-accent-hover shadow-sm',
    secondary: 'border-transparent text-white bg-secondary hover:bg-opacity-80',
    outline: 'border-accent text-accent bg-transparent hover:bg-accent hover:text-white',
    ghost: 'border-transparent text-text-dark bg-transparent hover:bg-gray-100',
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
};
