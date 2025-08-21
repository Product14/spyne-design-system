import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { Dashboard, Analytics, Settings } from '../../icons';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the tabs',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'pills', 'underline'],
      description: 'Visual style variant',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Make tabs take full width',
    },
    showContent: {
      control: { type: 'boolean' },
      description: 'Show tab content panels',
    },
    items: {
      control: { type: 'object' },
      description: 'Array of tab items with id, label, badge (optional), and content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Standard tab items
const standardTabs = [
  {
    id: 'tab1',
    label: 'Tab 1',
    badge: '3',
    content: <div style={{ padding: '1rem' }}>Content for Tab 1</div>,
  },
  {
    id: 'tab2',
    label: 'Tab 2',
    badge: '7',
    content: <div style={{ padding: '1rem' }}>Content for Tab 2</div>,
  },
  {
    id: 'tab3',
    label: 'Tab 3',
    content: <div style={{ padding: '1rem' }}>Content for Tab 3</div>,
  },
];

export const Default: Story = {
  args: {
    items: standardTabs,
    variant: 'underline',
    size: 'md',
  },
};
