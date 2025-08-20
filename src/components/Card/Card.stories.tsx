import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardBody, CardFooter } from './Card';
import { Button } from '../Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'elevated', 'outlined'],
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
    },
    interactive: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <CardHeader title="Card Title" subtitle="This is a subtitle" />
        <CardBody>
          This is the card content. You can put any content here including text, 
          images, forms, or other components.
        </CardBody>
        <CardFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </CardFooter>
      </>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <>
        <CardHeader title="Elevated Card" />
        <CardBody>
          This card has an elevated appearance with a shadow effect.
        </CardBody>
      </>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <>
        <CardHeader title="Outlined Card" />
        <CardBody>
          This card has a thicker border for emphasis.
        </CardBody>
      </>
    ),
  },
};

export const Interactive: Story = {
  args: {
    interactive: true,
    children: (
      <>
        <CardHeader title="Interactive Card" subtitle="Click me!" />
        <CardBody>
          This card is interactive and will respond to hover and click events.
        </CardBody>
      </>
    ),
  },
};

export const WithAction: Story = {
  args: {
    children: (
      <>
        <CardHeader 
          title="Card with Action" 
          subtitle="Action in header"
          action={
            <Button size="sm" variant="ghost">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </Button>
          }
        />
        <CardBody>
          This card has an action button in the header.
        </CardBody>
      </>
    ),
  },
};

export const NoPadding: Story = {
  args: {
    padding: 'none',
    children: (
      <>
        <CardHeader title="No Padding Card" />
        <CardBody>
          This card has no default padding. The header, body, and footer 
          manage their own spacing.
        </CardBody>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </>
    ),
  },
};

export const SmallPadding: Story = {
  args: {
    padding: 'sm',
    children: (
      <>
        <CardHeader title="Small Padding" />
        <CardBody>
          This card has small padding for a more compact appearance.
        </CardBody>
      </>
    ),
  },
};

export const LargePadding: Story = {
  args: {
    padding: 'lg',
    children: (
      <>
        <CardHeader title="Large Padding" />
        <CardBody>
          This card has large padding for a more spacious appearance.
        </CardBody>
      </>
    ),
  },
};

export const SimpleContent: Story = {
  args: {
    children: (
      <div>
        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.125rem', fontWeight: 600 }}>
          Simple Card
        </h3>
        <p style={{ margin: 0, color: '#6b7280' }}>
          You don't always need to use CardHeader, CardBody, and CardFooter. 
          You can put any content directly in the Card.
        </p>
      </div>
    ),
  },
};
