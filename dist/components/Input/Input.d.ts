import React from 'react';
import './Input.css';
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
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
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
