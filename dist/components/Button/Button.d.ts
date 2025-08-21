import React from 'react';
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
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
