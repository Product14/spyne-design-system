import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: { type: 'text' },
      description: 'The content to display in the tooltip',
    },
    placement: {
      control: { type: 'select' },
      options: [
        'top', 'top-start', 'top-end',
        'bottom', 'bottom-start', 'bottom-end',
        'left', 'left-start', 'left-end',
        'right', 'right-start', 'right-end'
      ],
      description: 'Placement of the tooltip arrow',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the tooltip is disabled',
    },
    delay: {
      control: { type: 'number' },
      description: 'Delay before showing tooltip (ms)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    placement: 'top',
    delay: 200,
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
  ),
};

// All placement variants showcase
export const AllPlacements: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(4, 1fr)', 
      gap: '2rem', 
      padding: '4rem',
      minHeight: '400px',
      alignItems: 'center',
      justifyItems: 'center'
    }}>
      {/* Top placements */}
      <Tooltip content="This is a tooltip" placement="top">
        <Button size="sm">Top</Button>
      </Tooltip>
      
      <Tooltip content="This is a tooltip" placement="top-start">
        <Button size="sm">Top Start</Button>
      </Tooltip>
      
      <Tooltip content="This is a tooltip" placement="top-end">
        <Button size="sm">Top End</Button>
      </Tooltip>
      
      <div></div>
      
      {/* Left placements */}
      <Tooltip content="This is a tooltip" placement="left">
        <Button size="sm">Left</Button>
      </Tooltip>
      
      <Tooltip content="This is a tooltip" placement="left-start">
        <Button size="sm">Left Start</Button>
      </Tooltip>
      
      <Tooltip content="This is a tooltip" placement="left-end">
        <Button size="sm">Left End</Button>
      </Tooltip>
      
      <div></div>
      
      {/* Right placements */}
      <Tooltip content="This is a tooltip" placement="right">
        <Button size="sm">Right</Button>
      </Tooltip>
      
      <Tooltip content="This is a tooltip" placement="right-start">
        <Button size="sm">Right Start</Button>
      </Tooltip>
      
      <Tooltip content="This is a tooltip" placement="right-end">
        <Button size="sm">Right End</Button>
      </Tooltip>
      
      <div></div>
      
      {/* Bottom placements */}
      <Tooltip content="This is a tooltip" placement="bottom">
        <Button size="sm">Bottom</Button>
      </Tooltip>
      
      <Tooltip content="This is a tooltip" placement="bottom-start">
        <Button size="sm">Bottom Start</Button>
      </Tooltip>
      
      <Tooltip content="This is a tooltip" placement="bottom-end">
        <Button size="sm">Bottom End</Button>
      </Tooltip>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
