import React from 'react';
import './Tabs.css';
export interface TabItem {
    id: string;
    label: string;
    content?: React.ReactNode;
    disabled?: boolean;
    badge?: string | number;
    icon?: React.ReactNode;
}
export interface TabsProps {
    /**
     * Array of tab items
     */
    items: TabItem[];
    /**
     * Currently active tab ID
     */
    activeTab?: string;
    /**
     * The size of the tabs
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * The variant of the tabs
     */
    variant?: 'default' | 'pills' | 'underline';
    /**
     * Whether tabs should fill the full width
     */
    fullWidth?: boolean;
    /**
     * Callback when tab changes
     */
    onChange?: (tabId: string, tab: TabItem) => void;
    /**
     * Additional CSS classes
     */
    className?: string;
    /**
     * Whether to show tab content
     */
    showContent?: boolean;
}
export declare const Tabs: React.FC<TabsProps>;
export interface TabPanelProps {
    /**
     * The content of the tab panel
     */
    children: React.ReactNode;
    /**
     * Whether this panel is active
     */
    active?: boolean;
    /**
     * Additional CSS classes
     */
    className?: string;
}
export declare const TabPanel: React.FC<TabPanelProps>;
