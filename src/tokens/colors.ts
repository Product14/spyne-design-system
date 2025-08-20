export const colors = {
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
} as const;

export type ColorToken = keyof typeof colors;
export type ColorShade = keyof typeof colors.primary;
