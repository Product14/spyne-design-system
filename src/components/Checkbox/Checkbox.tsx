import React, { forwardRef } from 'react';
import './Checkbox.css';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /**
   * The label text for the checkbox
   */
  label?: string;
  /**
   * Whether the checkbox has an error state
   */
  error?: boolean;
  /**
   * The size of the checkbox
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Additional className for the wrapper
   */
  className?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      error = false,
      size = 'md',
      className = '',
      disabled = false,
      id,
      ...props
    },
    ref
  ) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
    
    const wrapperClasses = [
      'checkbox-wrapper',
      `checkbox-wrapper--${size}`,
      error ? 'checkbox-wrapper--error' : '',
      disabled ? 'checkbox-wrapper--disabled' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const checkboxClasses = [
      'checkbox-input',
      `checkbox-input--${size}`,
      error ? 'checkbox-input--error' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={wrapperClasses}>
        <div className="checkbox-container">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            className={checkboxClasses}
            disabled={disabled}
            {...props}
          />
          <div className="checkbox-indicator">
            <svg
              className="checkbox-checkmark"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.485 4.515a1 1 0 0 1 0 1.414l-6.5 6.5a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L6.5 10.429l5.571-5.914a1 1 0 0 1 1.414 0z"
                fill="currentColor"
                strokeWidth="0"
              />
            </svg>
          </div>
        </div>
        {label && (
          <label htmlFor={checkboxId} className="checkbox-label">
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';