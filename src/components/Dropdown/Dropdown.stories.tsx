import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: { type: 'object' },
      description: 'Array of dropdown options',
    },
    value: {
      control: { type: 'text' },
      description: 'Selected value(s) - string for single, array for multiselect',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text when no option is selected',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the dropdown',
    },
    multiselect: {
      control: { type: 'boolean' },
      description: 'Enable multiselect functionality',
    },
    error: {
      control: { type: 'boolean' },
      description: 'Whether the dropdown has an error state',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the dropdown is disabled',
    },
    label: {
      control: { type: 'text' },
      description: 'Label for the dropdown',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text below the dropdown',
    },
    errorMessage: {
      control: { type: 'text' },
      description: 'Error message when error is true',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Standard options
const standardOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
  { value: 'option5', label: 'Option 5' },
];

export const Default: Story = {
  args: {
    options: standardOptions,
    label: 'Dropdown',
    placeholder: 'Select an option',
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
      <Dropdown
        options={standardOptions}
        size="sm"
        label="Small (32px height)"
        placeholder="Small dropdown"
        value="option1"
      />
      <Dropdown
        options={standardOptions}
        size="md"
        label="Medium (36px height)"
        placeholder="Medium dropdown"
        value="option2"
      />
      <Dropdown
        options={standardOptions}
        size="lg"
        label="Large (40px height)"
        placeholder="Large dropdown"
        value="option3"
      />
    </div>
  ),
};
