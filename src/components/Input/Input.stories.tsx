import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { 
  Search, 
  Visibility, 
  VisibilityOff, 
  Person, 
  Email, 
  Lock, 
  Phone, 
  Calendar, 
  LocationOn,
  Error,
  Warning,
  Info,
  Success
} from '../../icons';

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

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Enter your text here...',
    size: 'md',
  },
};

export const Filled: Story = {
  args: {
    label: 'Filled Input',
    variant: 'filled',
    size: 'md',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Input label="Small" size="sm" />
      <Input label="Medium" size="md" />
      <Input label="Large" size="lg" />
    </div>
  ),
};

// Error States
export const ErrorState: Story = {
  args: {
    label: 'Email',
    type: 'email',
    error: true,
    errorMessage: 'Please enter a valid email address',
    defaultValue: 'invalid-email',
  },
};



// Icon Variations
export const WithStartIcon: Story = {
  args: {
    label: 'Search',
    startIcon: <Search />,
    placeholder: 'Search...',
  },
};

export const WithEndIcon: Story = {
  args: {
    label: 'Password',
    type: 'password',
    endIcon: <Visibility />,
  },
};

export const WithBothIcons: Story = {
  args: {
    label: 'Username',
    startIcon: <Person />,
    endIcon: <Success style={{ color: '#10B981' }} />,
    defaultValue: 'john_doe',
  },
};

// Common Input Types with Icons
export const EmailInput: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    startIcon: <Email />,
    helperText: 'We\'ll never share your email',
  },
};

export const PasswordInput: Story = {
  args: {
    label: 'Password',
    type: 'password',
    startIcon: <Lock />,
    endIcon: <VisibilityOff />,
    helperText: 'Must be at least 8 characters',
  },
};

export const PhoneInput: Story = {
  args: {
    label: 'Phone Number',
    type: 'tel',
    startIcon: <Phone />,
    placeholder: '+1 (555) 123-4567',
  },
};

export const DateInput: Story = {
  args: {
    label: 'Select Date',
    type: 'date',
  },
};

export const LocationInput: Story = {
  args: {
    label: 'Address',
    type: 'text',
    startIcon: <LocationOn />,
    placeholder: 'Enter your address',
  },
};

// Status Variations
export const WithSuccess: Story = {
  args: {
    label: 'Username',
    startIcon: <Person />,
    endIcon: <Success />,
    helperText: 'Username is available',
    defaultValue: 'john_doe',
  },
};



export const WithInfo: Story = {
  args: {
    label: 'API Key',
    type: 'text',
    endIcon: <Info />,
    helperText: 'You can find this in your account settings',
  },
};

// Disabled State
export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    disabled: true,
    defaultValue: 'This input is disabled',
    startIcon: <Person />,
  },
};

// Complex Example
export const ComplexForm: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }}>
      <Input 
        label="Full Name" 
        startIcon={<Person />} 
        helperText="Enter your first and last name"
      />
      <Input 
        label="Email Address" 
        type="email" 
        startIcon={<Email />}
        error={false}
        helperText="We'll send confirmation to this email"
      />
      <Input 
        label="Password" 
        type="password" 
        startIcon={<Lock />} 
        endIcon={<VisibilityOff />}
        helperText="Must be at least 8 characters"
      />
      <Input 
        label="Phone Number" 
        type="tel" 
        startIcon={<Phone />}
        placeholder="+1 (555) 123-4567"
      />
      <Input 
        label="Confirm Email" 
        type="email" 
        startIcon={<Email />}
        error={true}
        errorMessage="Email addresses don't match"
        defaultValue="different@email.com"
      />
    </div>
  ),
};
