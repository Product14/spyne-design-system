export declare const colors: {
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
export type ColorToken = keyof typeof colors;
export type ColorShade = keyof typeof colors.primary;
