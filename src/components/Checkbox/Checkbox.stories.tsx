import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label text for the checkbox',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the checkbox',
    },
    error: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox has an error state',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is disabled',
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is checked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Checkbox',
    size: 'md',
  },
};

// Size Variants
export const Sizes: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '1.5rem',
      alignItems: 'flex-start'
    }}>
      <Checkbox size="sm" label="Small (16px)" name="sizes" value="small" />
      <Checkbox size="md" label="Medium (20px)" name="sizes" value="medium" defaultChecked />
      <Checkbox size="lg" label="Large (24px)" name="sizes" value="large" />
    </div>
  ),
};
