import React from 'react';
import './RadioButton.css';
export interface RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
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
export declare const RadioButton: React.ForwardRefExoticComponent<RadioButtonProps & React.RefAttributes<HTMLInputElement>>;
