import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';
import { MaterialSymbols } from '../../icons/MaterialSymbols';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Chips are compact elements that represent an attribute, text, entity, or action. They allow users to enter information, make selections, filter content, or trigger actions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info', 'neutral'],
      description: 'The color variant of the chip',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the chip',
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether the chip can be dismissed',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the chip is disabled',
    },
    selected: {
      control: 'boolean',
      description: 'Whether the chip is selected',
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the chip is clickable',
    },
    children: {
      control: 'text',
      description: 'The content of the chip',
    },
    onDismiss: {
      action: 'dismissed',
      description: 'Callback fired when chip is dismissed',
    },
    onClick: {
      action: 'clicked',
      description: 'Callback fired when chip is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
  args: {
    children: 'Default Chip',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Chip',
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'primary',
    children: 'With Icon',
    leftIcon: <MaterialSymbols.Person />,
  },
};

export const Dismissible: Story = {
  args: {
    variant: 'primary',
    children: 'Dismissible',
    dismissible: true,
  },
};

export const Clickable: Story = {
  args: {
    variant: 'secondary',
    children: 'Clickable',
    clickable: true,
  },
};

export const Selected: Story = {
  args: {
    variant: 'primary',
    children: 'Selected',
    selected: true,
    clickable: true,
  },
};

// Size Variants
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Chip size="sm" variant="primary">Small</Chip>
      <Chip size="md" variant="primary">Medium</Chip>
      <Chip size="lg" variant="primary">Large</Chip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Chips come in three sizes: small (24px), medium (32px), and large (40px).',
      },
    },
  },
};

// Color Variants
export const ColorVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Chip variant="primary">Primary</Chip>
      <Chip variant="secondary">Secondary</Chip>
      <Chip variant="success">Success</Chip>
      <Chip variant="warning">Warning</Chip>
      <Chip variant="error">Error</Chip>
      <Chip variant="info">Info</Chip>
      <Chip variant="neutral">Neutral</Chip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different color variants for various semantic meanings.',
      },
    },
  },
};

// Selected State
export const SelectedStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Chip variant="primary" selected clickable>Primary Selected</Chip>
      <Chip variant="secondary" selected clickable>Secondary Selected</Chip>
      <Chip variant="success" selected clickable>Success Selected</Chip>
      <Chip variant="warning" selected clickable>Warning Selected</Chip>
      <Chip variant="error" selected clickable>Error Selected</Chip>
      <Chip variant="info" selected clickable>Info Selected</Chip>
      <Chip variant="neutral" selected clickable>Neutral Selected</Chip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Selected state for filter chips or toggleable chips.',
      },
    },
  },
};

// With Icons
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Chip variant="primary" leftIcon={<MaterialSymbols.Person />}>User</Chip>
      <Chip variant="success" leftIcon={<MaterialSymbols.Check />}>Verified</Chip>
      <Chip variant="warning" leftIcon={<MaterialSymbols.Warning />}>Warning</Chip>
      <Chip variant="error" leftIcon={<MaterialSymbols.Error />}>Error</Chip>
      <Chip variant="info" leftIcon={<MaterialSymbols.Info />}>Information</Chip>
      <Chip variant="neutral" leftIcon={<MaterialSymbols.Settings />} rightIcon={<MaterialSymbols.ChevronRight />}>Settings</Chip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Chips with left and right icons for better visual context.',
      },
    },
  },
};

// Dismissible Chips
export const DismissibleChips: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Chip variant="primary" dismissible>React</Chip>
      <Chip variant="secondary" dismissible>TypeScript</Chip>
      <Chip variant="success" dismissible>Approved</Chip>
      <Chip variant="info" dismissible leftIcon={<MaterialSymbols.Person />}>John Doe</Chip>
      <Chip variant="neutral" dismissible>Tag</Chip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dismissible chips for tags, filters, or removable items.',
      },
    },
  },
};

// Interactive States
export const InteractiveStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Chip variant="primary" clickable>Clickable</Chip>
        <Chip variant="primary" clickable selected>Selected</Chip>
        <Chip variant="primary" disabled>Disabled</Chip>
        <Chip variant="primary" dismissible disabled>Disabled Dismissible</Chip>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Chip variant="secondary" clickable>Hover me</Chip>
        <Chip variant="success" clickable>Focus me</Chip>
        <Chip variant="warning" dismissible>Dismiss me</Chip>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Various interactive states including hover, focus, selected, and disabled.',
      },
    },
  },
};

// Size Comparison with Icons
export const SizeComparisonWithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '0.875rem', color: '#6B7280' }}>Small</h4>
        <Chip size="sm" variant="primary" leftIcon={<MaterialSymbols.Person />}>User</Chip>
        <Chip size="sm" variant="success" dismissible>Tag</Chip>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '0.875rem', color: '#6B7280' }}>Medium</h4>
        <Chip size="md" variant="primary" leftIcon={<MaterialSymbols.Person />}>User</Chip>
        <Chip size="md" variant="success" dismissible>Tag</Chip>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '0.875rem', color: '#6B7280' }}>Large</h4>
        <Chip size="lg" variant="primary" leftIcon={<MaterialSymbols.Person />}>User</Chip>
        <Chip size="lg" variant="success" dismissible>Tag</Chip>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Size comparison showing how icons and text scale appropriately with each size.',
      },
    },
  },
};

// Use Cases
export const FilterChips: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Chip variant="primary" selected clickable>All</Chip>
      <Chip variant="neutral" clickable>Active</Chip>
      <Chip variant="neutral" clickable>Completed</Chip>
      <Chip variant="neutral" clickable>Draft</Chip>
      <Chip variant="neutral" clickable>Archived</Chip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Filter chips for category selection or filtering content.',
      },
    },
  },
};

export const TagChips: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Chip variant="secondary" dismissible>React</Chip>
      <Chip variant="secondary" dismissible>TypeScript</Chip>
      <Chip variant="secondary" dismissible>JavaScript</Chip>
      <Chip variant="secondary" dismissible>CSS</Chip>
      <Chip variant="secondary" dismissible>HTML</Chip>
      <Chip variant="secondary" dismissible>Node.js</Chip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tag chips for labeling or categorizing content.',
      },
    },
  },
};

export const StatusChips: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Chip variant="success" leftIcon={<MaterialSymbols.Check />}>Approved</Chip>
      <Chip variant="warning" leftIcon={<MaterialSymbols.Warning />}>Pending</Chip>
      <Chip variant="error" leftIcon={<MaterialSymbols.Error />}>Rejected</Chip>
      <Chip variant="info" leftIcon={<MaterialSymbols.Info />}>In Review</Chip>
      <Chip variant="neutral" leftIcon={<MaterialSymbols.Refresh />}>Processing</Chip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Status chips for displaying various states or statuses.',
      },
    },
  },
};
