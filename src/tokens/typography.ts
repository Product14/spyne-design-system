export const typography = {
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
    xs: '0.75rem',      // 12px
    small: '0.75rem',   // 12px
    
    // Body text and Subheading: 14px
    sm: '0.875rem',     // 14px
    body: '0.875rem',   // 14px
    subheading: '0.875rem', // 14px
    
    // Button sizes
    buttonSmall: '0.75rem',  // 12px
    buttonMedium: '0.875rem', // 14px
    buttonLarge: '1rem',     // 16px
    
    // Base sizes
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    
    // Page Heading: 20px
    xl: '1.25rem',      // 20px
    pageHeading: '1.25rem', // 20px
    
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
  },
  
  // Font weights
  fontWeight: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    regular: 400,      // Regular for subheading
    medium: 500,
    semibold: 600,     // SemiBold for page heading
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  
  // Line heights based on your design system
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    pageHeading: 1.4,  // Page heading line height
    normal: 1.5,       // Subheading line height
    subheading: 1.5,   // Subheading line height
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
} as const;

export type FontFamily = keyof typeof typography.fontFamily;
export type FontSize = keyof typeof typography.fontSize;
export type FontWeight = keyof typeof typography.fontWeight;
export type LineHeight = keyof typeof typography.lineHeight;
export type LetterSpacing = keyof typeof typography.letterSpacing;
