import React from 'react';
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
export declare const Chip: React.ForwardRefExoticComponent<ChipProps & React.RefAttributes<HTMLDivElement>>;
