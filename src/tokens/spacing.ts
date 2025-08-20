// Spacing system based on 4px base unit
export const spacing = {
  0: '0px',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  7: '1.75rem',   // 28px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  
  // Button padding
  buttonSmall: '0.75rem',  // 12px
  buttonMedium: '0.875rem', // 14px  
  buttonLarge: '1rem',     // 16px
  
  // Layout padding
  pageHorizontal: '3rem',  // 48px - Page padding left/right
  pageVertical: '2rem',    // 32px - Page padding top/bottom
} as const;

// Icon sizes for buttons
export const iconSizes = {
  small: '1rem',    // 16px - Small buttons
  medium: '1.25rem', // 20px - Medium buttons
  large: '1.5rem',   // 24px - Large buttons
} as const;

// Border radius system
export const borderRadius = {
  none: '0px',
  sm: '0.25rem',    // 4px
  md: '0.375rem',   // 6px - Input
  lg: '0.5rem',     // 8px - Button, Card
  xl: '0.75rem',    // 12px - Modal
  full: '9999px',   // Chip, Avatar
  
  // Component specific
  button: '0.5rem',   // 8px
  input: '0.375rem',  // 6px
  card: '0.5rem',     // 8px
  modal: '0.75rem',   // 12px
  chip: '9999px',
  avatar: '9999px',
} as const;

export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
} as const;

export type Spacing = keyof typeof spacing;
export type BorderRadius = keyof typeof borderRadius;
export type Shadow = keyof typeof shadows;
export type IconSize = keyof typeof iconSizes;
