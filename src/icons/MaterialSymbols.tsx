import React from 'react';

export interface IconProps {
  className?: string;
  size?: number | string;
  style?: React.CSSProperties;
}

// Material Symbols - Outlined style
// These are official Material Symbols from Google's Material Design
export const MaterialSymbols = {
  // Navigation & Actions
  Add: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6z"/>
    </svg>
  ),
  
  Remove: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M19 13H5v-2h14v2z"/>
    </svg>
  ),
  
  Close: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </svg>
  ),
  
  Check: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
    </svg>
  ),
  
  ChevronRight: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/>
    </svg>
  ),
  
  ChevronLeft: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/>
    </svg>
  ),
  
  ExpandMore: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/>
    </svg>
  ),
  
  ExpandLess: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/>
    </svg>
  ),
  
  // Content & Media
  Download: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"/>
    </svg>
  ),
  
  Upload: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5v-2z"/>
    </svg>
  ),
  
  Search: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.35-4.35"/>
    </svg>
  ),
  
  // Communication
  Email: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  
  // Security & Privacy
  Visibility: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  
  VisibilityOff: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
      <line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  ),
  
  // Actions & Controls
  MoreVert: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
    </svg>
  ),
  
  Settings: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
    </svg>
  ),
  
  // Loading
  Refresh: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
    </svg>
  ),
  
  // Navigation
  Home: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
  ),
  
  Dashboard: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
    </svg>
  ),
  
  Analytics: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
    </svg>
  ),
  
  // File & Folder
  Folder: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"/>
    </svg>
  ),
  
  Description: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
    </svg>
  ),
  
  // User & Authentication
  Person: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  ),
  
  Lock: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM15.1 8H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z"/>
    </svg>
  ),
  
  LockOpen: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"/>
    </svg>
  ),
  
  // Status & Alerts
  Error: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
    </svg>
  ),
  
  Warning: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
    </svg>
  ),
  
  Info: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
    </svg>
  ),
  
  Success: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  ),
  
  // Input specific icons
  Phone: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  ),
  
  Calendar: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
    </svg>
  ),
  
  LocationOn: ({ className, size = 24, style }: IconProps) => (
    <svg 
      className={className} 
      style={{ width: size, height: size, ...style }} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  ),
};

// Export individual icons for easier importing
export const {
  Add,
  Remove,
  Close,
  Check,
  ChevronRight,
  ChevronLeft,
  ExpandMore,
  ExpandLess,
  Download,
  Upload,
  Search,
  Email,
  Visibility,
  VisibilityOff,
  MoreVert,
  Settings,
  Refresh,
  Home,
  Dashboard,
  Analytics,
  Folder,
  Description,
  Person,
  Lock,
  LockOpen,
  Error,
  Warning,
  Info,
  Success,
  Phone,
  Calendar,
  LocationOn,
} = MaterialSymbols;
