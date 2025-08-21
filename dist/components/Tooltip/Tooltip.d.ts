import React from 'react';
import './Tooltip.css';
export interface TooltipProps {
    /**
     * The content to display in the tooltip
     */
    content: React.ReactNode;
    /**
     * The element that triggers the tooltip
     */
    children: React.ReactNode;
    /**
     * Placement of the tooltip relative to the trigger element
     */
    placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';
    /**
     * Whether the tooltip is disabled
     */
    disabled?: boolean;
    /**
     * Delay before showing tooltip (in ms)
     */
    delay?: number;
    /**
     * Custom className for the tooltip
     */
    className?: string;
}
export declare const Tooltip: React.FC<TooltipProps>;
