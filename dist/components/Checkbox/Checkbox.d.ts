import React from 'react';
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
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
