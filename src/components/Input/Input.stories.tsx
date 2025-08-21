import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { Search, Visibility } from '../../icons';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'The floating label text',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'date', 'time', 'search'],
      description: 'HTML input type',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled'],
    },
    error: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text below input',
    },
    errorMessage: {
      control: { type: 'text' },
      description: 'Error message when error is true',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label',
    type: 'text',
    size: 'md',
  },
};
