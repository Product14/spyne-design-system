import React, { forwardRef } from 'react';
import { MaterialSymbols } from '../../icons/MaterialSymbols';
import './Chip.css';

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The variant/color of the chip
   */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral';
  /**
   * The size of the chip
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Whether the chip can be dismissed/removed
   */
  dismissible?: boolean;
  /**
   * Whether the chip is disabled
   */
  disabled?: boolean;
  /**
   * Icon to display before the chip text
   */
  leftIcon?: React.ReactNode;
  /**
   * Icon to display after the chip text (overridden by close icon if dismissible)
   */
  rightIcon?: React.ReactNode;
  /**
   * Callback fired when the chip is dismissed
   */
  onDismiss?: () => void;
  /**
   * Whether the chip is selected (for filter chips)
   */
  selected?: boolean;
  /**
   * Whether the chip is clickable
   */
  clickable?: boolean;
}

export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      variant = 'neutral',
      size = 'md',
      dismissible = false,
      disabled = false,
      selected = false,
      clickable = false,
      leftIcon,
      rightIcon,
      onDismiss,
      children,
      className = '',
      onClick,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'chip';
    const variantClasses = `chip--${variant}`;
    const sizeClasses = `chip--${size}`;
    const disabledClasses = disabled ? 'chip--disabled' : '';
    const selectedClasses = selected ? 'chip--selected' : '';
    const clickableClasses = (clickable || onClick) && !disabled ? 'chip--clickable' : '';
    const dismissibleClasses = dismissible ? 'chip--dismissible' : '';
    
    const classes = [
      baseClasses,
      variantClasses,
      sizeClasses,
      disabledClasses,
      selectedClasses,
      clickableClasses,
      dismissibleClasses,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const handleDismiss = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!disabled && onDismiss) {
        onDismiss();
      }
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!disabled && onClick) {
        onClick(e);
      }
    };

    // Determine icon size based on chip size
    const getIconSize = () => {
      switch (size) {
        case 'sm':
          return 14;
        case 'lg':
          return 20;
        case 'md':
        default:
          return 16;
      }
    };

    return (
      <div
        ref={ref}
        className={classes}
        onClick={handleClick}
        role={clickable || onClick ? 'button' : undefined}
        tabIndex={clickable || onClick ? 0 : undefined}
        aria-disabled={disabled}
        {...props}
      >
        {leftIcon && (
          <span className="chip__icon chip__icon--left">
            {React.isValidElement(leftIcon) 
              ? React.cloneElement(leftIcon as React.ReactElement<any>, {
                  size: getIconSize(),
                })
              : leftIcon}
          </span>
        )}
        
        {children && <span className="chip__text">{children}</span>}
        
        {!dismissible && rightIcon && (
          <span className="chip__icon chip__icon--right">
            {React.isValidElement(rightIcon) 
              ? React.cloneElement(rightIcon as React.ReactElement<any>, {
                  size: getIconSize(),
                })
              : rightIcon}
          </span>
        )}
        
        {dismissible && (
          <button
            type="button"
            className="chip__dismiss"
            onClick={handleDismiss}
            disabled={disabled}
            aria-label="Remove"
          >
            <MaterialSymbols.Close size={getIconSize()} />
          </button>
        )}
      </div>
    );
  }
);

Chip.displayName = 'Chip';
