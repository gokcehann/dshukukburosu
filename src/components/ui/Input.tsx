import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', id, ...props }) => {
  return (
    <div className="flex flex-col space-y-1">
      {label && <label htmlFor={id} className="text-sm font-medium text-text-dark">{label}</label>}
      <input
        id={id}
        className={`px-4 py-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent ${error ? 'border-red-500' : 'border-gray-300'} ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};
