import React, { forwardRef } from 'react';
import './Input.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * The size of the input
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The variant of the input
   */
  variant?: 'default' | 'filled';
  /**
   * Whether the input has an error state
   */
  error?: boolean;
  /**
   * Label for the input
   */
  label?: string;
  /**
   * Helper text to display below the input
   */
  helperText?: string;
  /**
   * Error message to display
   */
  errorMessage?: string;
  /**
   * Icon to display at the start of the input
   */
  startIcon?: React.ReactNode;
  /**
   * Icon to display at the end of the input
   */
  endIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      variant = 'default',
      error = false,
      label,
      helperText,
      errorMessage,
      startIcon,
      endIcon,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    
    const baseClasses = 'input';
    const sizeClasses = `input--${size}`;
    const variantClasses = `input--${variant}`;
    const errorClasses = error ? 'input--error' : '';
    const startIconClasses = startIcon ? 'input--with-start-icon' : '';
    const endIconClasses = endIcon ? 'input--with-end-icon' : '';
    
    const inputClasses = [
      baseClasses,
      sizeClasses,
      variantClasses,
      errorClasses,
      startIconClasses,
      endIconClasses,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className="input-wrapper">
        {label && (
          <label htmlFor={inputId} className="input-label">
            {label}
          </label>
        )}
        <div className="input-container">
          {startIcon && (
            <div className="input-icon input-icon--start">
              {startIcon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={inputClasses}
            {...props}
          />
          {endIcon && (
            <div className="input-icon input-icon--end">
              {endIcon}
            </div>
          )}
        </div>
        {(helperText || errorMessage) && (
          <div className={`input-help ${error ? 'input-help--error' : ''}`}>
            {error && errorMessage ? errorMessage : helperText}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
