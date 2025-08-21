import React from 'react';
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
export declare const Dropdown: React.FC<DropdownProps>;
