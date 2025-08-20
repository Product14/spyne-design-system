import React from 'react';
import './Card.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The variant of the card
   */
  variant?: 'default' | 'elevated' | 'outlined';
  /**
   * The padding size of the card
   */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /**
   * Whether the card is interactive (clickable)
   */
  interactive?: boolean;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'md',
  interactive = false,
  className = '',
  children,
  ...props
}) => {
  const baseClasses = 'card';
  const variantClasses = `card--${variant}`;
  const paddingClasses = `card--padding-${padding}`;
  const interactiveClasses = interactive ? 'card--interactive' : '';
  
  const classes = [
    baseClasses,
    variantClasses,
    paddingClasses,
    interactiveClasses,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Title for the card header
   */
  title?: string;
  /**
   * Subtitle for the card header
   */
  subtitle?: string;
  /**
   * Action element to display in the header
   */
  action?: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  action,
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={`card-header ${className}`} {...props}>
      <div className="card-header__content">
        {title && <h3 className="card-header__title">{title}</h3>}
        {subtitle && <p className="card-header__subtitle">{subtitle}</p>}
        {children}
      </div>
      {action && <div className="card-header__action">{action}</div>}
    </div>
  );
};

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardBody: React.FC<CardBodyProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={`card-body ${className}`} {...props}>
      {children}
    </div>
  );
};

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardFooter: React.FC<CardFooterProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={`card-footer ${className}`} {...props}>
      {children}
    </div>
  );
};
