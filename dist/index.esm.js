import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef, useState, useRef, useEffect } from 'react';

const colors = {
    // Primary color - #4600F2
    primary: {
        50: '#f4f0ff',
        100: '#e8deff',
        200: '#d4c1ff',
        300: '#b794ff',
        400: '#9357ff',
        500: '#4600F2',
        600: '#4000e6',
        700: '#3600cc',
        800: '#2d00a6',
        900: '#240080',
    },
    // Secondary color - 8% opacity of primary
    secondary: {
        base: '#4600F214', // 8% opacity
        light: '#4600F208', // 3% opacity
        medium: '#4600F21A', // 10% opacity
        dark: '#4600F226', // 15% opacity
    },
    // Background and surface colors
    background: '#F4F5F8',
    surface: '#FFFFFF',
    // Text colors
    text: {
        primary: '#1A1A1A',
        secondary: '#6B7280',
    },
    // Border color
    border: '#E5E7EB',
    // Semantic colors
    success: '#22C55E',
    warning: '#FACC15',
    error: '#EF4444',
    info: '#3B82F6',
    // Additional semantic variations for different states
    successLight: '#dcfce7',
    warningLight: '#fef3c7',
    errorLight: '#fee2e2',
    infoLight: '#dbeafe',
    // Utility colors
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
};

const typography = {
    // Font families - Inter as primary
    fontFamily: {
        primary: ['Inter', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        mono: ['Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
    },
    // Font sizes based on your design system
    fontSize: {
        // Small text: 12px
        xs: '0.75rem', // 12px
        small: '0.75rem', // 12px
        // Body text and Subheading: 14px
        sm: '0.875rem', // 14px
        body: '0.875rem', // 14px
        subheading: '0.875rem', // 14px
        // Button sizes
        buttonSmall: '0.75rem', // 12px
        buttonMedium: '0.875rem', // 14px
        buttonLarge: '1rem', // 16px
        // Base sizes
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        // Page Heading: 20px
        xl: '1.25rem', // 20px
        pageHeading: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
        '6xl': '3.75rem', // 60px
    },
    // Font weights
    fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        regular: 400, // Regular for subheading
        medium: 500,
        semibold: 600, // SemiBold for page heading
        bold: 700,
        extrabold: 800,
        black: 900,
    },
    // Line heights based on your design system
    lineHeight: {
        none: 1,
        tight: 1.25,
        snug: 1.375,
        pageHeading: 1.4, // Page heading line height
        normal: 1.5, // Subheading line height
        subheading: 1.5, // Subheading line height
        relaxed: 1.625,
        loose: 2,
    },
    // Letter spacing
    letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
    },
};

// Spacing system based on 4px base unit
const spacing = {
    0: '0px',
    1: '0.25rem', // 4px
    2: '0.5rem', // 8px
    3: '0.75rem', // 12px
    4: '1rem', // 16px
    5: '1.25rem', // 20px
    6: '1.5rem', // 24px
    7: '1.75rem', // 28px
    8: '2rem', // 32px
    10: '2.5rem', // 40px
    12: '3rem', // 48px
    16: '4rem', // 64px
    20: '5rem', // 80px
    24: '6rem', // 96px
    // Button padding
    buttonSmall: '0.75rem', // 12px
    buttonMedium: '0.875rem', // 14px  
    buttonLarge: '1rem', // 16px
    // Layout padding
    pageHorizontal: '3rem', // 48px - Page padding left/right
    pageVertical: '2rem', // 32px - Page padding top/bottom
};
// Icon sizes for buttons
const iconSizes = {
    small: '1rem', // 16px - Small buttons
    medium: '1.25rem', // 20px - Medium buttons
    large: '1.5rem', // 24px - Large buttons
};
// Border radius system
const borderRadius = {
    none: '0px',
    sm: '0.25rem', // 4px
    md: '0.375rem', // 6px - Input
    lg: '0.5rem', // 8px - Button, Card
    xl: '0.75rem', // 12px - Modal
    full: '9999px', // Chip, Avatar
    // Component specific
    button: '0.5rem', // 8px
    input: '0.375rem', // 6px
    card: '0.5rem', // 8px
    modal: '0.75rem', // 12px
    chip: '9999px',
    avatar: '9999px',
};
const shadows = {
    none: 'none',
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
};

const Button = forwardRef(({ variant = 'primary', size = 'md', fullWidth = false, loading = false, leftIcon, rightIcon, children, className = '', disabled, ...props }, ref) => {
    const baseClasses = 'btn';
    const variantClasses = `btn--${variant}`;
    const sizeClasses = `btn--${size}`;
    const fullWidthClasses = fullWidth ? 'btn--full-width' : '';
    const loadingClasses = loading ? 'btn--loading' : '';
    const classes = [
        baseClasses,
        variantClasses,
        sizeClasses,
        fullWidthClasses,
        loadingClasses,
        className,
    ]
        .filter(Boolean)
        .join(' ');
    return (jsxs("button", { ref: ref, className: classes, disabled: disabled || loading, ...props, children: [loading && (jsx("span", { className: "btn__spinner", "aria-hidden": "true", children: jsxs("svg", { className: "btn__spinner-icon", viewBox: "0 0 24 24", fill: "none", children: [jsx("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4", className: "opacity-25" }), jsx("path", { fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", className: "opacity-75" })] }) })), !loading && leftIcon && (jsx("span", { className: "btn__icon btn__icon--left", children: leftIcon })), children && jsx("span", { className: "btn__text", children: children }), !loading && rightIcon && (jsx("span", { className: "btn__icon btn__icon--right", children: rightIcon }))] }));
});
Button.displayName = 'Button';

const Input = forwardRef(({ size = 'md', variant = 'default', error = false, label, helperText, errorMessage, startIcon, endIcon, className = '', id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const baseClasses = 'input';
    const sizeClasses = `input--${size}`;
    const variantClasses = `input--${variant}`;
    const errorClasses = error ? 'input--error' : '';
    const startIconClasses = startIcon ? 'input--with-start-icon' : '';
    const endIconClasses = endIcon ? 'input--with-end-icon' : '';
    const inputClasses = [
        baseClasses,
        sizeClasses,
        variantClasses,
        errorClasses,
        startIconClasses,
        endIconClasses,
        className,
    ]
        .filter(Boolean)
        .join(' ');
    return (jsxs("div", { className: "input-wrapper", children: [jsxs("div", { className: "input-container", children: [startIcon && (jsx("div", { className: "input-icon input-icon--start", children: startIcon })), jsx("input", { ref: ref, id: inputId, className: inputClasses, placeholder: label ? " " : props.placeholder, ...(label ? { ...props, placeholder: " " } : props) }), endIcon && (jsx("div", { className: "input-icon input-icon--end", children: endIcon })), label && (jsx("label", { htmlFor: inputId, className: "input-label", children: label }))] }), (helperText || errorMessage) && (jsx("div", { className: `input-help ${error ? 'input-help--error' : ''}`, children: error && errorMessage ? errorMessage : helperText }))] }));
});
Input.displayName = 'Input';

const Dropdown = ({ options, value, placeholder = 'Select an option', size = 'md', error = false, disabled = false, multiselect = false, onChange, label, helperText, errorMessage, className = '', id, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);
    const dropdownId = id || `dropdown-${Math.random().toString(36).substr(2, 9)}`;
    // Handle both single and multi-select values
    const selectedValues = Array.isArray(value) ? value : (value ? [value] : []);
    const selectedOptions = options.filter(option => selectedValues.includes(option.value));
    // Get display text for trigger
    const getDisplayText = () => {
        if (selectedOptions.length === 0)
            return placeholder;
        if (multiselect) {
            if (selectedOptions.length === 1)
                return selectedOptions[0].label;
            return `${selectedOptions.length} selected`;
        }
        return selectedOptions[0]?.label || placeholder;
    };
    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
                setFocusedIndex(-1);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (!isOpen)
                return;
            switch (event.key) {
                case 'Escape':
                    setIsOpen(false);
                    setFocusedIndex(-1);
                    buttonRef.current?.focus();
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    setFocusedIndex(prev => prev < options.length - 1 ? prev + 1 : 0);
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    setFocusedIndex(prev => prev > 0 ? prev - 1 : options.length - 1);
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
        if (disabled)
            return;
        setIsOpen(!isOpen);
        setFocusedIndex(-1);
    };
    const handleOptionSelect = (option) => {
        if (option.disabled)
            return;
        if (multiselect) {
            const newSelectedValues = selectedValues.includes(option.value)
                ? selectedValues.filter(v => v !== option.value) // Remove if already selected
                : [...selectedValues, option.value]; // Add if not selected
            const newSelectedOptions = options.filter(opt => newSelectedValues.includes(opt.value));
            onChange?.(newSelectedValues, newSelectedOptions);
        }
        else {
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
    return (jsxs("div", { className: "dropdown-wrapper", children: [label && (jsx("label", { htmlFor: dropdownId, className: "dropdown-label", children: label })), jsxs("div", { ref: dropdownRef, className: [baseClasses, sizeClasses, errorClasses, disabledClasses, openClasses]
                    .filter(Boolean)
                    .join(' '), children: [jsxs("button", { ref: buttonRef, id: dropdownId, type: "button", className: triggerClasses, onClick: handleToggle, disabled: disabled, "aria-haspopup": "listbox", "aria-expanded": isOpen, ...props, children: [jsxs("span", { className: "dropdown__trigger-content", children: [!multiselect && selectedOptions[0]?.icon && (jsx("span", { className: "dropdown__trigger-icon", children: selectedOptions[0].icon })), jsx("span", { className: "dropdown__trigger-text", children: getDisplayText() })] }), jsx("span", { className: "dropdown__trigger-arrow", children: jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: jsx("path", { d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" }) }) })] }), isOpen && (jsx("div", { className: "dropdown__menu", role: "listbox", children: jsx("div", { className: "dropdown__options", children: options.length === 0 ? (jsx("div", { className: "dropdown__no-options", children: "No options available" })) : (options.map((option, index) => {
                                const isSelected = selectedValues.includes(option.value);
                                return (jsxs("button", { type: "button", className: [
                                        'dropdown__option',
                                        option.disabled && 'dropdown__option--disabled',
                                        isSelected && 'dropdown__option--selected',
                                        index === focusedIndex && 'dropdown__option--focused',
                                    ]
                                        .filter(Boolean)
                                        .join(' '), onClick: () => handleOptionSelect(option), disabled: option.disabled, role: "option", "aria-selected": isSelected, children: [option.icon && (jsx("span", { className: "dropdown__option-icon", children: option.icon })), jsx("span", { className: "dropdown__option-text", children: option.label }), isSelected && (jsx("span", { className: "dropdown__option-check", children: jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: jsx("path", { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" }) }) }))] }, option.value));
                            })) }) }))] }), (helperText || errorMessage) && (jsx("div", { className: `dropdown-help ${error ? 'dropdown-help--error' : ''}`, children: error && errorMessage ? errorMessage : helperText }))] }));
};

const Tabs = ({ items, activeTab, size = 'md', variant = 'underline', fullWidth = false, onChange, className = '', showContent = true, }) => {
    const [activeTabId, setActiveTabId] = useState(activeTab || items[0]?.id);
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const tabsRef = useRef(null);
    const activeTabRef = useRef(null);
    const activeTabItem = items.find(item => item.id === activeTabId);
    // Update indicator position for underline variant
    useEffect(() => {
        if (variant === 'underline' && activeTabRef.current && tabsRef.current) {
            const activeTab = activeTabRef.current;
            const tabsContainer = tabsRef.current;
            const tabRect = activeTab.getBoundingClientRect();
            const containerRect = tabsContainer.getBoundingClientRect();
            setIndicatorStyle({
                width: tabRect.width,
                transform: `translateX(${tabRect.left - containerRect.left}px)`,
            });
        }
    }, [activeTabId, variant, items]);
    const handleTabClick = (tab) => {
        if (tab.disabled)
            return;
        setActiveTabId(tab.id);
        onChange?.(tab.id, tab);
    };
    const baseClasses = 'tabs';
    const sizeClasses = `tabs--${size}`;
    const variantClasses = `tabs--${variant}`;
    const fullWidthClasses = fullWidth ? 'tabs--full-width' : '';
    const tabsClasses = [
        baseClasses,
        sizeClasses,
        variantClasses,
        fullWidthClasses,
        className,
    ]
        .filter(Boolean)
        .join(' ');
    return (jsxs("div", { className: tabsClasses, children: [jsxs("div", { className: "tabs__header", ref: tabsRef, children: [jsx("div", { className: "tabs__list", role: "tablist", children: items.map((tab) => {
                            const isActive = tab.id === activeTabId;
                            return (jsxs("button", { ref: isActive ? activeTabRef : null, type: "button", role: "tab", "aria-selected": isActive, "aria-controls": `tabpanel-${tab.id}`, className: [
                                    'tabs__tab',
                                    `tabs__tab--${size}`,
                                    `tabs__tab--${variant}`,
                                    isActive && 'tabs__tab--active',
                                    tab.disabled && 'tabs__tab--disabled',
                                    fullWidth && 'tabs__tab--full-width',
                                ]
                                    .filter(Boolean)
                                    .join(' '), onClick: () => handleTabClick(tab), disabled: tab.disabled, children: [tab.icon && (jsx("span", { className: "tabs__tab-icon", children: tab.icon })), jsx("span", { className: "tabs__tab-text", children: tab.label }), tab.badge && (jsxs("span", { className: "tabs__tab-badge", children: ["(", tab.badge, ")"] }))] }, tab.id));
                        }) }), variant === 'underline' && (jsx("div", { className: "tabs__indicator", style: indicatorStyle }))] }), showContent && activeTabItem?.content && (jsx("div", { className: "tabs__content", role: "tabpanel", id: `tabpanel-${activeTabId}`, "aria-labelledby": `tab-${activeTabId}`, children: activeTabItem.content }))] }));
};
const TabPanel = ({ children, active = false, className = '', }) => {
    if (!active)
        return null;
    return (jsx("div", { className: `tab-panel ${className}`, children: children }));
};

const Tooltip = ({ content, children, placement = 'top', disabled = false, delay = 200, className = '', }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);
    const triggerRef = useRef(null);
    const showTooltip = () => {
        if (disabled)
            return;
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        const id = setTimeout(() => {
            setIsVisible(true);
        }, delay);
        setTimeoutId(id);
    };
    const hideTooltip = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
        setIsVisible(false);
    };
    useEffect(() => {
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [timeoutId]);
    const tooltipClasses = [
        'tooltip',
        `tooltip--${placement}`,
        isVisible ? 'tooltip--visible' : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');
    return (jsxs("div", { className: "tooltip-wrapper", children: [jsx("div", { ref: triggerRef, className: "tooltip-trigger", onMouseEnter: showTooltip, onMouseLeave: hideTooltip, onFocus: showTooltip, onBlur: hideTooltip, children: children }), isVisible && !disabled && (jsxs("div", { className: tooltipClasses, role: "tooltip", children: [jsx("div", { className: "tooltip-content", children: content }), jsx("div", { className: "tooltip-arrow" })] }))] }));
};
Tooltip.displayName = 'Tooltip';

const RadioButton = forwardRef(({ label, error = false, size = 'md', className = '', disabled = false, id, ...props }, ref) => {
    const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;
    const wrapperClasses = [
        'radio-wrapper',
        `radio-wrapper--${size}`,
        error ? 'radio-wrapper--error' : '',
        disabled ? 'radio-wrapper--disabled' : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');
    const radioClasses = [
        'radio-input',
        `radio-input--${size}`,
        error ? 'radio-input--error' : '',
    ]
        .filter(Boolean)
        .join(' ');
    return (jsxs("div", { className: wrapperClasses, children: [jsxs("div", { className: "radio-container", children: [jsx("input", { ref: ref, type: "radio", id: radioId, className: radioClasses, disabled: disabled, ...props }), jsx("div", { className: "radio-indicator", children: jsx("div", { className: "radio-dot" }) })] }), label && (jsx("label", { htmlFor: radioId, className: "radio-label", children: label }))] }));
});
RadioButton.displayName = 'RadioButton';

const Checkbox = forwardRef(({ label, error = false, size = 'md', className = '', disabled = false, id, ...props }, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
    const wrapperClasses = [
        'checkbox-wrapper',
        `checkbox-wrapper--${size}`,
        error ? 'checkbox-wrapper--error' : '',
        disabled ? 'checkbox-wrapper--disabled' : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');
    const checkboxClasses = [
        'checkbox-input',
        `checkbox-input--${size}`,
        error ? 'checkbox-input--error' : '',
    ]
        .filter(Boolean)
        .join(' ');
    return (jsxs("div", { className: wrapperClasses, children: [jsxs("div", { className: "checkbox-container", children: [jsx("input", { ref: ref, type: "checkbox", id: checkboxId, className: checkboxClasses, disabled: disabled, ...props }), jsx("div", { className: "checkbox-indicator", children: jsx("svg", { className: "checkbox-checkmark", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M13.485 4.515a1 1 0 0 1 0 1.414l-6.5 6.5a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L6.5 10.429l5.571-5.914a1 1 0 0 1 1.414 0z", fill: "currentColor", strokeWidth: "0" }) }) })] }), label && (jsx("label", { htmlFor: checkboxId, className: "checkbox-label", children: label }))] }));
});
Checkbox.displayName = 'Checkbox';

// Material Symbols - Outlined style
// These are official Material Symbols from Google's Material Design
const MaterialSymbols = {
    // Navigation & Actions
    Add: ({ className, size = 24, style }) => (jsx("svg", { className: className, style: { width: size, height: size, ...style }, viewBox: "0 0 24 24", fill: "currentColor", children: jsx("path", { d: "M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6z" }) })),
    Remove: ({ className, size = 24, style }) => (jsx("svg", { className: className, style: { width: size, height: size, ...style }, viewBox: "0 0 24 24", fill: "currentColor", children: jsx("path", { d: "M19 13H5v-2h14v2z" }) })),
    Close: ({ className, size = 24, style }) => (jsx("svg", { className: className, style: { width: size, height: size, ...style }, viewBox: "0 0 24 24", fill: "currentColor", children: jsx("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }) })),
    Check: ({ className, size = 24, style }) => (jsx("svg", { className: className, style: { width: size, height: size, ...style }, viewBox: "0 0 24 24", fill: "currentColor", children: jsx("path", { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" }) })),
    ChevronRight: ({ className, size = 24, style }) => (jsx("svg", { className: className, style: { width: size, height: size, ...style }, viewBox: "0 0 24 24", fill: "currentColor", children: jsx("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" }) })),
    ChevronLeft: ({ className, size = 24, style }) => (jsx("svg", { className: className, style: { width: size, height: size, ...style }, viewBox: "0 0 24 24", fill: "currentColor", children: jsx("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" }) })),
    ExpandMore: ({ className, size = 24, style }) => (jsx("svg", { className: className, style: { width: size, height: size, ...style }, viewBox: "0 0 24 24", fill: "currentColor", children: jsx("path", { d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" }) })),
    ExpandLess: ({ className, size = 24, style }) => (jsx("svg", { className: className, style: { width: size, height: size, ...style }, viewBox: "0 0 24 24", fill: "currentColor", children: jsx("path", { d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z" }) })),
    // Content & Media
    Download: ({ className, size = 24, style }) => (jsx("svg", { className: className, style: { width: size, height: size, ...style }, viewBox: "0 0 24 24", fill: "currentColor", children: jsx("path", { d: "M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" }) })),
    Upload: ({ className, size = 24, style }) => (jsx("svg", { className: className, style: { width: size, height: size, ...style }, viewBox: "0 0 24 24", fill: "currentColor", children: jsx("path", { d: "M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5v-2z" }) })),
    Search: ({ className, size = 24, style }) => (jsxs("svg", { className: className, style: { width: size, height: size, ...style }, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [jsx("circle", { cx: "11", cy: "11", r: "8" }), jsx("path", { d: "m21 21-4.35-4.35" })] })),
    // Communication
    Email: ({ className, size = 24, style }) => (jsxs("svg", { className: className, style: { width: size, height: size, ...style }, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [jsx("path", { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }), jsx("polyline", { points: "22,6 12,13 2,6" })] })),
    // Security & Privacy
    Visibility: ({ className, size = 24, style }) => (jsxs("svg", { className: className, style: { width: size, height: size, ...style }, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [jsx("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }), jsx("circle", { cx: "12", cy: "12", r: "3" })] })),
    VisibilityOff: ({ className, size = 24, style }) => (jsxs("svg", { className: className, style: { width: size, height: size, ...style }, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [jsx("path", { d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" }), jsx("line", { x1: "1", y1: "1", x2: "23", y2: "23" })] })),
    // Actions & Controls
    MoreVert: ({ className, size = 24, style }) => (jsx("svg", { className: className, style: { width: size, height: size, ...style }, viewBox: "0 0 24 24", fill: "currentColor", children: jsx("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }) })),
    Settings: ({ className, size = 24, style }) => (jsx("svg", { className: className, style: { width: size, height: size, ...style }, viewBox: "0 0 24 24", fill: "currentColor", children: jsx("path", { d: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" }) })),
    // Loading
    Refresh: ({ className, size = 24, style }) => (jsx("svg", { className: className, style: { width: size, height: size, ...style }, viewBox: "0 0 24 24", fill: "currentColor", children: jsx("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" }) })),
    // Navigation
    Home: ({ className, size = 24, style }) => (jsx("svg", { className: className, style: { width: size, height: size, ...style }, viewBox: "0 0 24 24", fill: "currentColor", children: jsx("path", { d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" }) })),
    Dashboard: ({ className, size = 24, style }) => (jsx("svg", { className: className, style: { width: size, height: size, ...style }, viewBox: "0 0 24 24", fill: "currentColor", children: jsx("path", { d: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" }) })),
    Analytics: ({ className, size = 24, style }) => (jsx("svg", { className: className, style: { width: size, height: size, ...style }, viewBox: "0 0 24 24", fill: "currentColor", children: jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" }) })),
    // File & Folder
    Folder: ({ className, size = 24, style }) => (jsx("svg", { className: className, style: { width: size, height: size, ...style }, viewBox: "0 0 24 24", fill: "currentColor", children: jsx("path", { d: "M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z" }) })),
    Description: ({ className, size = 24, style }) => (jsx("svg", { className: className, style: { width: size, height: size, ...style }, viewBox: "0 0 24 24", fill: "currentColor", children: jsx("path", { d: "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" }) })),
};
// Export individual icons for easier importing
const { Add, Remove, Close, Check, ChevronRight, ChevronLeft, ExpandMore, ExpandLess, Download, Upload, Search, Email, Visibility, VisibilityOff, MoreVert, Settings, Refresh, Home, Dashboard, Analytics, Folder, Description, } = MaterialSymbols;

export { Add, Analytics, Button, Check, Checkbox, ChevronLeft, ChevronRight, Close, Dashboard, Description, Download, Dropdown, Email, ExpandLess, ExpandMore, Folder, Home, Input, MaterialSymbols, MoreVert, RadioButton, Refresh, Remove, Search, Settings, TabPanel, Tabs, Tooltip, Upload, Visibility, VisibilityOff, borderRadius, colors, iconSizes, shadows, spacing, typography };
//# sourceMappingURL=index.esm.js.map
