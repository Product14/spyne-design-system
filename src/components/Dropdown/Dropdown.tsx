import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css';

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface DropdownProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /**
   * Array of dropdown options
   */
  options: DropdownOption[];
  /**
   * Current selected value(s) - string for single select, string[] for multiselect
   */
  value?: string | string[];
  /**
   * Placeholder text when no option is selected
   */
  placeholder?: string;
  /**
   * The size of the dropdown
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Whether the dropdown has an error state
   */
  error?: boolean;
  /**
   * Whether the dropdown is disabled
   */
  disabled?: boolean;
  /**
   * Enable multiselect functionality
   */
  multiselect?: boolean;
  /**
   * Callback when selection changes
   */
  onChange?: (value: string | string[], option?: DropdownOption | DropdownOption[]) => void;
  /**
   * Label for the dropdown
   */
  label?: string;
  /**
   * Helper text to display below the dropdown
   */
  helperText?: string;
  /**
   * Error message to display
   */
  errorMessage?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  placeholder = 'Select an option',
  size = 'md',
  error = false,
  disabled = false,
  multiselect = false,
  onChange,
  label,
  helperText,
  errorMessage,
  className = '',
  id,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const dropdownId = id || `dropdown-${Math.random().toString(36).substr(2, 9)}`;
  
  // Handle both single and multi-select values
  const selectedValues = Array.isArray(value) ? value : (value ? [value] : []);
  const selectedOptions = options.filter(option => selectedValues.includes(option.value));
  
  // Get display text for trigger
  const getDisplayText = () => {
    if (selectedOptions.length === 0) return placeholder;
    if (multiselect) {
      if (selectedOptions.length === 1) return selectedOptions[0].label;
      return `${selectedOptions.length} selected`;
    }
    return selectedOptions[0]?.label || placeholder;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case 'Escape':
          setIsOpen(false);
          setFocusedIndex(-1);
          buttonRef.current?.focus();
          break;
        case 'ArrowDown':
          event.preventDefault();
          setFocusedIndex(prev => 
            prev < options.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          event.preventDefault();
          setFocusedIndex(prev => 
            prev > 0 ? prev - 1 : options.length - 1
          );
          break;
        case 'Enter':
          event.preventDefault();
          if (focusedIndex >= 0 && options[focusedIndex]) {
            handleOptionSelect(options[focusedIndex]);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, focusedIndex, options]);

  const handleToggle = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
    setFocusedIndex(-1);
  };

  const handleOptionSelect = (option: DropdownOption) => {
    if (option.disabled) return;
    
    if (multiselect) {
      const newSelectedValues = selectedValues.includes(option.value)
        ? selectedValues.filter(v => v !== option.value) // Remove if already selected
        : [...selectedValues, option.value]; // Add if not selected
      
      const newSelectedOptions = options.filter(opt => newSelectedValues.includes(opt.value));
      onChange?.(newSelectedValues, newSelectedOptions);
    } else {
      onChange?.(option.value, option);
      setIsOpen(false);
      setFocusedIndex(-1);
      buttonRef.current?.focus();
    }
  };

  const baseClasses = 'dropdown';
  const sizeClasses = `dropdown--${size}`;
  const errorClasses = error ? 'dropdown--error' : '';
  const disabledClasses = disabled ? 'dropdown--disabled' : '';
  const openClasses = isOpen ? 'dropdown--open' : '';
  
  const triggerClasses = [
    'dropdown__trigger',
    `dropdown__trigger--${size}`,
    errorClasses && 'dropdown__trigger--error',
    disabledClasses && 'dropdown__trigger--disabled',
    openClasses && 'dropdown__trigger--open',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="dropdown-wrapper">
      {label && (
        <label htmlFor={dropdownId} className="dropdown-label">
          {label}
        </label>
      )}
      
      <div 
        ref={dropdownRef}
        className={[baseClasses, sizeClasses, errorClasses, disabledClasses, openClasses]
          .filter(Boolean)
          .join(' ')}
      >
        <button
          ref={buttonRef}
          id={dropdownId}
          type="button"
          className={triggerClasses}
          onClick={handleToggle}
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          {...props}
        >
          <span className="dropdown__trigger-content">
            {!multiselect && selectedOptions[0]?.icon && (
              <span className="dropdown__trigger-icon">
                {selectedOptions[0].icon}
              </span>
            )}
            <span className="dropdown__trigger-text">
              {getDisplayText()}
            </span>
          </span>
          
          <span className="dropdown__trigger-arrow">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/>
            </svg>
          </span>
        </button>

        {isOpen && (
          <div className="dropdown__menu" role="listbox">
            <div className="dropdown__options">
              {options.length === 0 ? (
                <div className="dropdown__no-options">
                  No options available
                </div>
              ) : (
                options.map((option, index) => {
                  const isSelected = selectedValues.includes(option.value);
                  return (
                    <button
                      key={option.value}
                      type="button"
                      className={[
                        'dropdown__option',
                        option.disabled && 'dropdown__option--disabled',
                        isSelected && 'dropdown__option--selected',
                        index === focusedIndex && 'dropdown__option--focused',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                      onClick={() => handleOptionSelect(option)}
                      disabled={option.disabled}
                      role="option"
                      aria-selected={isSelected}
                    >
                      {option.icon && (
                        <span className="dropdown__option-icon">
                          {option.icon}
                        </span>
                      )}
                      <span className="dropdown__option-text">
                        {option.label}
                      </span>
                      {isSelected && (
                        <span className="dropdown__option-check">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                          </svg>
                        </span>
                      )}
                    </button>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>

      {(helperText || errorMessage) && (
        <div className={`dropdown-help ${error ? 'dropdown-help--error' : ''}`}>
          {error && errorMessage ? errorMessage : helperText}
        </div>
      )}
    </div>
  );
};
