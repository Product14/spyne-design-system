import React from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

declare const colors: {
    readonly primary: {
        readonly 50: "#f4f0ff";
        readonly 100: "#e8deff";
        readonly 200: "#d4c1ff";
        readonly 300: "#b794ff";
        readonly 400: "#9357ff";
        readonly 500: "#4600F2";
        readonly 600: "#4000e6";
        readonly 700: "#3600cc";
        readonly 800: "#2d00a6";
        readonly 900: "#240080";
    };
    readonly secondary: {
        readonly base: "#4600F214";
        readonly light: "#4600F208";
        readonly medium: "#4600F21A";
        readonly dark: "#4600F226";
    };
    readonly background: "#F4F5F8";
    readonly surface: "#FFFFFF";
    readonly text: {
        readonly primary: "#1A1A1A";
        readonly secondary: "#6B7280";
    };
    readonly border: "#E5E7EB";
    readonly success: "#22C55E";
    readonly warning: "#FACC15";
    readonly error: "#EF4444";
    readonly info: "#3B82F6";
    readonly successLight: "#dcfce7";
    readonly warningLight: "#fef3c7";
    readonly errorLight: "#fee2e2";
    readonly infoLight: "#dbeafe";
    readonly white: "#FFFFFF";
    readonly black: "#000000";
    readonly transparent: "transparent";
};
type ColorToken = keyof typeof colors;
type ColorShade = keyof typeof colors.primary;

declare const typography: {
    readonly fontFamily: {
        readonly primary: readonly ["Inter", "sans-serif"];
        readonly sans: readonly ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"];
        readonly serif: readonly ["Georgia", "Cambria", "Times New Roman", "Times", "serif"];
        readonly mono: readonly ["Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"];
    };
    readonly fontSize: {
        readonly xs: "0.75rem";
        readonly small: "0.75rem";
        readonly sm: "0.875rem";
        readonly body: "0.875rem";
        readonly subheading: "0.875rem";
        readonly buttonSmall: "0.75rem";
        readonly buttonMedium: "0.875rem";
        readonly buttonLarge: "1rem";
        readonly base: "1rem";
        readonly lg: "1.125rem";
        readonly xl: "1.25rem";
        readonly pageHeading: "1.25rem";
        readonly '2xl': "1.5rem";
        readonly '3xl': "1.875rem";
        readonly '4xl': "2.25rem";
        readonly '5xl': "3rem";
        readonly '6xl': "3.75rem";
    };
    readonly fontWeight: {
        readonly thin: 100;
        readonly extralight: 200;
        readonly light: 300;
        readonly normal: 400;
        readonly regular: 400;
        readonly medium: 500;
        readonly semibold: 600;
        readonly bold: 700;
        readonly extrabold: 800;
        readonly black: 900;
    };
    readonly lineHeight: {
        readonly none: 1;
        readonly tight: 1.25;
        readonly snug: 1.375;
        readonly pageHeading: 1.4;
        readonly normal: 1.5;
        readonly subheading: 1.5;
        readonly relaxed: 1.625;
        readonly loose: 2;
    };
    readonly letterSpacing: {
        readonly tighter: "-0.05em";
        readonly tight: "-0.025em";
        readonly normal: "0em";
        readonly wide: "0.025em";
        readonly wider: "0.05em";
        readonly widest: "0.1em";
    };
};
type FontFamily = keyof typeof typography.fontFamily;
type FontSize = keyof typeof typography.fontSize;
type FontWeight = keyof typeof typography.fontWeight;
type LineHeight = keyof typeof typography.lineHeight;
type LetterSpacing = keyof typeof typography.letterSpacing;

declare const spacing: {
    readonly 0: "0px";
    readonly 1: "0.25rem";
    readonly 2: "0.5rem";
    readonly 3: "0.75rem";
    readonly 4: "1rem";
    readonly 5: "1.25rem";
    readonly 6: "1.5rem";
    readonly 7: "1.75rem";
    readonly 8: "2rem";
    readonly 10: "2.5rem";
    readonly 12: "3rem";
    readonly 16: "4rem";
    readonly 20: "5rem";
    readonly 24: "6rem";
    readonly buttonSmall: "0.75rem";
    readonly buttonMedium: "0.875rem";
    readonly buttonLarge: "1rem";
    readonly pageHorizontal: "3rem";
    readonly pageVertical: "2rem";
};
declare const iconSizes: {
    readonly small: "1rem";
    readonly medium: "1.25rem";
    readonly large: "1.5rem";
};
declare const borderRadius: {
    readonly none: "0px";
    readonly sm: "0.25rem";
    readonly md: "0.375rem";
    readonly lg: "0.5rem";
    readonly xl: "0.75rem";
    readonly full: "9999px";
    readonly button: "0.5rem";
    readonly input: "0.375rem";
    readonly card: "0.5rem";
    readonly modal: "0.75rem";
    readonly chip: "9999px";
    readonly avatar: "9999px";
};
declare const shadows: {
    readonly none: "none";
    readonly sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)";
    readonly base: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)";
    readonly md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
    readonly lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)";
    readonly xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)";
    readonly '2xl': "0 25px 50px -12px rgb(0 0 0 / 0.25)";
    readonly inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)";
};
type Spacing = keyof typeof spacing;
type BorderRadius = keyof typeof borderRadius;
type Shadow = keyof typeof shadows;
type IconSize = keyof typeof iconSizes;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
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
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

interface DropdownOption {
    value: string;
    label: string;
    disabled?: boolean;
    icon?: React.ReactNode;
}
interface DropdownProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
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
declare const Dropdown: React.FC<DropdownProps>;

interface TabItem {
    id: string;
    label: string;
    content?: React.ReactNode;
    disabled?: boolean;
    badge?: string | number;
    icon?: React.ReactNode;
}
interface TabsProps {
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
declare const Tabs: React.FC<TabsProps>;
interface TabPanelProps {
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
declare const TabPanel: React.FC<TabPanelProps>;

interface TooltipProps {
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
declare const Tooltip: React.FC<TooltipProps>;

interface RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
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
declare const RadioButton: React.ForwardRefExoticComponent<RadioButtonProps & React.RefAttributes<HTMLInputElement>>;

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
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
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;

interface IconProps {
    className?: string;
    size?: number | string;
    style?: React.CSSProperties;
}
declare const MaterialSymbols: {
    Add: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
    Remove: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
    Close: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
    Check: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
    ChevronRight: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
    ChevronLeft: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
    ExpandMore: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
    ExpandLess: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
    Download: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
    Upload: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
    Search: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
    Email: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
    Visibility: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
    VisibilityOff: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
    MoreVert: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
    Settings: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
    Refresh: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
    Home: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
    Dashboard: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
    Analytics: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
    Folder: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
    Description: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
    Person: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
    Lock: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
    LockOpen: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
    Error: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
    Warning: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
    Info: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
    Success: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
    Phone: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
    Calendar: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
    LocationOn: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
};
declare const Add: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
declare const Remove: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
declare const Close: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
declare const Check: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
declare const ChevronRight: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
declare const ChevronLeft: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
declare const ExpandMore: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
declare const ExpandLess: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
declare const Download: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
declare const Upload: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
declare const Search: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
declare const Email: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
declare const Visibility: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
declare const VisibilityOff: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
declare const MoreVert: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
declare const Settings: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
declare const Refresh: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
declare const Home: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
declare const Dashboard: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
declare const Analytics: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
declare const Folder: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
declare const Description: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
declare const Person: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
declare const Lock: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
declare const LockOpen: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
declare const Error: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
declare const Warning: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
declare const Info: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
declare const Success: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
declare const Phone: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
declare const Calendar: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;
declare const LocationOn: ({ className, size, style }: IconProps) => react_jsx_runtime.JSX.Element;

export { Add, Analytics, Button, Calendar, Check, Checkbox, ChevronLeft, ChevronRight, Close, Dashboard, Description, Download, Dropdown, Email, Error, ExpandLess, ExpandMore, Folder, Home, Info, Input, LocationOn, Lock, LockOpen, MaterialSymbols, MoreVert, Person, Phone, RadioButton, Refresh, Remove, Search, Settings, Success, TabPanel, Tabs, Tooltip, Upload, Visibility, VisibilityOff, Warning, borderRadius, colors, iconSizes, shadows, spacing, typography };
export type { BorderRadius, ButtonProps, CheckboxProps, ColorShade, ColorToken, DropdownOption, DropdownProps, FontFamily, FontSize, FontWeight, IconProps, IconSize, InputProps, LetterSpacing, LineHeight, RadioButtonProps, Shadow, Spacing, TabItem, TabPanelProps, TabsProps, TooltipProps };
