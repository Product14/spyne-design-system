import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tabs } from './Tabs';

const mockTabs = [
  {
    id: 'tab1',
    label: 'Tab 1',
    content: <div>Content 1</div>,
  },
  {
    id: 'tab2',
    label: 'Tab 2',
    content: <div>Content 2</div>,
  },
  {
    id: 'tab3',
    label: 'Tab 3',
    content: <div>Content 3</div>,
    disabled: true,
  },
];

const mockTabsWithBadges = [
  {
    id: 'inbound',
    label: 'Inbound',
    badge: '4',
    content: <div>Inbound content</div>,
  },
  {
    id: 'outbound',
    label: 'Outbound',
    badge: '2',
    content: <div>Outbound content</div>,
  },
];

describe('Tabs', () => {
  it('renders all tabs', () => {
    render(<Tabs items={mockTabs} />);
    
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
    expect(screen.getByText('Tab 3')).toBeInTheDocument();
  });

  it('shows first tab as active by default', () => {
    render(<Tabs items={mockTabs} />);
    
    const firstTab = screen.getByRole('tab', { name: /tab 1/i });
    expect(firstTab).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });

  it('switches tabs when clicked', async () => {
    const user = userEvent.setup();
    render(<Tabs items={mockTabs} />);
    
    const secondTab = screen.getByRole('tab', { name: /tab 2/i });
    await user.click(secondTab);
    
    expect(secondTab).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('calls onChange when tab is clicked', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    
    render(<Tabs items={mockTabs} onChange={handleChange} />);
    
    const secondTab = screen.getByRole('tab', { name: /tab 2/i });
    await user.click(secondTab);
    
    expect(handleChange).toHaveBeenCalledWith('tab2', mockTabs[1]);
  });

  it('does not switch to disabled tabs', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    
    render(<Tabs items={mockTabs} onChange={handleChange} />);
    
    const disabledTab = screen.getByRole('tab', { name: /tab 3/i });
    await user.click(disabledTab);
    
    expect(handleChange).not.toHaveBeenCalled();
    expect(disabledTab).toHaveAttribute('aria-selected', 'false');
  });

  it('renders badges when provided', () => {
    render(<Tabs items={mockTabsWithBadges} />);
    
    expect(screen.getByText('(4)')).toBeInTheDocument();
    expect(screen.getByText('(2)')).toBeInTheDocument();
  });

  it('applies correct size classes', () => {
    const { rerender } = render(<Tabs items={mockTabs} size="sm" />);
    
    let tabs = screen.getAllByRole('tab');
    expect(tabs[0]).toHaveClass('tabs__tab--sm');
    
    rerender(<Tabs items={mockTabs} size="lg" />);
    tabs = screen.getAllByRole('tab');
    expect(tabs[0]).toHaveClass('tabs__tab--lg');
  });

  it('applies correct variant classes', () => {
    const { rerender } = render(<Tabs items={mockTabs} variant="pills" />);
    
    let tabs = screen.getAllByRole('tab');
    expect(tabs[0]).toHaveClass('tabs__tab--pills');
    
    rerender(<Tabs items={mockTabs} variant="underline" />);
    tabs = screen.getAllByRole('tab');
    expect(tabs[0]).toHaveClass('tabs__tab--underline');
  });

  it('applies full width when specified', () => {
    render(<Tabs items={mockTabs} fullWidth />);
    
    const tabs = screen.getAllByRole('tab');
    expect(tabs[0]).toHaveClass('tabs__tab--full-width');
  });

  it('hides content when showContent is false', () => {
    render(<Tabs items={mockTabs} showContent={false} />);
    
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });

  it('sets initial active tab when provided', () => {
    render(<Tabs items={mockTabs} activeTab="tab2" />);
    
    const secondTab = screen.getByRole('tab', { name: /tab 2/i });
    expect(secondTab).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('renders icons when provided', () => {
    const tabsWithIcons = [
      {
        id: 'tab1',
        label: 'Tab 1',
        icon: <svg data-testid="tab-icon">test</svg>,
        content: <div>Content 1</div>,
      },
    ];
    
    render(<Tabs items={tabsWithIcons} />);
    
    expect(screen.getByTestId('tab-icon')).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<Tabs items={mockTabs} />);
    
    const tabList = screen.getByRole('tablist');
    expect(tabList).toBeInTheDocument();
    
    const tabs = screen.getAllByRole('tab');
    tabs.forEach((tab, index) => {
      expect(tab).toHaveAttribute('aria-controls', `tabpanel-${mockTabs[index].id}`);
    });
    
    const tabPanel = screen.getByRole('tabpanel');
    expect(tabPanel).toHaveAttribute('id', 'tabpanel-tab1');
    expect(tabPanel).toHaveAttribute('aria-labelledby', 'tab-tab1');
  });

  it('handles keyboard navigation', async () => {
    const user = userEvent.setup();
    render(<Tabs items={mockTabs} />);
    
    const firstTab = screen.getByRole('tab', { name: /tab 1/i });
    firstTab.focus();
    
    // Tab should be focusable
    expect(firstTab).toHaveFocus();
  });
});
