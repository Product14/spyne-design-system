import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label text for the radio button',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the radio button',
    },
    error: {
      control: { type: 'boolean' },
      description: 'Whether the radio button has an error state',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the radio button is disabled',
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the radio button is checked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Radio Button',
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
      <RadioButton size="sm" label="Small (16px)" name="sizes" value="small" />
      <RadioButton size="md" label="Medium (20px)" name="sizes" value="medium" defaultChecked />
      <RadioButton size="lg" label="Large (24px)" name="sizes" value="large" />
    </div>
  ),
};
