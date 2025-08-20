import React, { forwardRef } from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  /**
   * The size of the button
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Whether the button should take full width
   */
  fullWidth?: boolean;
  /**
   * Whether the button is in a loading state
   */
  loading?: boolean;
  /**
   * Icon to display before the button text
   */
  leftIcon?: React.ReactNode;
  /**
   * Icon to display after the button text
   */
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'btn';
    const variantClasses = `btn--${variant}`;
    const sizeClasses = `btn--${size}`;
    const fullWidthClasses = fullWidth ? 'btn--full-width' : '';
    const loadingClasses = loading ? 'btn--loading' : '';
    
    const classes = [
      baseClasses,
      variantClasses,
      sizeClasses,
      fullWidthClasses,
      loadingClasses,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <span className="btn__spinner" aria-hidden="true">
            <svg
              className="btn__spinner-icon"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                className="opacity-25"
              />
              <path
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                className="opacity-75"
              />
            </svg>
          </span>
        )}
        {!loading && leftIcon && (
          <span className="btn__icon btn__icon--left">{leftIcon}</span>
        )}
        {children && <span className="btn__text">{children}</span>}
        {!loading && rightIcon && (
          <span className="btn__icon btn__icon--right">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
