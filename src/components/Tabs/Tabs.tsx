import React, { useState, useRef, useEffect } from 'react';
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

export const Tabs: React.FC<TabsProps> = ({
  items,
  activeTab,
  size = 'md',
  variant = 'underline',
  fullWidth = false,
  onChange,
  className = '',
  showContent = true,
}) => {
  const [activeTabId, setActiveTabId] = useState(activeTab || items[0]?.id);
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});
  const tabsRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

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

  const handleTabClick = (tab: TabItem) => {
    if (tab.disabled) return;
    
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

  return (
    <div className={tabsClasses}>
      <div className="tabs__header" ref={tabsRef}>
        <div className="tabs__list" role="tablist">
          {items.map((tab) => {
            const isActive = tab.id === activeTabId;
            
            return (
              <button
                key={tab.id}
                ref={isActive ? activeTabRef : null}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`tabpanel-${tab.id}`}
                className={[
                  'tabs__tab',
                  `tabs__tab--${size}`,
                  `tabs__tab--${variant}`,
                  isActive && 'tabs__tab--active',
                  tab.disabled && 'tabs__tab--disabled',
                  fullWidth && 'tabs__tab--full-width',
                ]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => handleTabClick(tab)}
                disabled={tab.disabled}
              >
                {tab.icon && (
                  <span className="tabs__tab-icon">
                    {tab.icon}
                  </span>
                )}
                
                <span className="tabs__tab-text">
                  {tab.label}
                </span>
                
                {tab.badge && (
                  <span className="tabs__tab-badge">
                    ({tab.badge})
                  </span>
                )}
              </button>
            );
          })}
        </div>
        
        {variant === 'underline' && (
          <div 
            className="tabs__indicator"
            style={indicatorStyle}
          />
        )}
      </div>

      {showContent && activeTabItem?.content && (
        <div 
          className="tabs__content"
          role="tabpanel"
          id={`tabpanel-${activeTabId}`}
          aria-labelledby={`tab-${activeTabId}`}
        >
          {activeTabItem.content}
        </div>
      )}
    </div>
  );
};

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

export const TabPanel: React.FC<TabPanelProps> = ({
  children,
  active = false,
  className = '',
}) => {
  if (!active) return null;

  return (
    <div className={`tab-panel ${className}`}>
      {children}
    </div>
  );
};
