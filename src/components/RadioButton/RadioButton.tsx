import React, { forwardRef } from 'react';
import './RadioButton.css';

export interface RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * The label text for the radio button
   */
  label?: string;
  /**
   * Whether the radio button has an error state
   */
  error?: boolean;
  /**
   * The size of the radio button
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Additional className for the wrapper
   */
  className?: string;
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
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
    const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;
    
    const wrapperClasses = [
      'radio-wrapper',
      `radio-wrapper--${size}`,
      error ? 'radio-wrapper--error' : '',
      disabled ? 'radio-wrapper--disabled' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const radioClasses = [
      'radio-input',
      `radio-input--${size}`,
      error ? 'radio-input--error' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={wrapperClasses}>
        <div className="radio-container">
          <input
            ref={ref}
            type="radio"
            id={radioId}
            className={radioClasses}
            disabled={disabled}
            {...props}
          />
          <div className="radio-indicator">
            <div className="radio-dot" />
          </div>
        </div>
        {label && (
          <label htmlFor={radioId} className="radio-label">
            {label}
          </label>
        )}
      </div>
    );
  }
);

RadioButton.displayName = 'RadioButton';
