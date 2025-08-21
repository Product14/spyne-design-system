export declare const typography: {
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
export type FontFamily = keyof typeof typography.fontFamily;
export type FontSize = keyof typeof typography.fontSize;
export type FontWeight = keyof typeof typography.fontWeight;
export type LineHeight = keyof typeof typography.lineHeight;
export type LetterSpacing = keyof typeof typography.letterSpacing;
