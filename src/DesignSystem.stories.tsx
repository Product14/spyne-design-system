import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { colors, typography, spacing } from './tokens';
import { Add, Email, MoreVert } from './icons';

const meta: Meta = {
  title: 'Design System/Overview',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ColorPalette: Story = {
  render: () => (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem', color: '#1A1A1A' }}>
        Color System
      </h2>
      
      <div style={{ display: 'grid', gap: '2rem' }}>
        {/* Primary Colors */}
        <div>
          <h3 style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '1rem', color: '#1A1A1A' }}>
            Primary Color - #4600F2
          </h3>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {Object.entries(colors.primary).map(([shade, color]) => (
              <div key={shade} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '4rem',
                    height: '4rem',
                    backgroundColor: color,
                    borderRadius: '0.375rem',
                    marginBottom: '0.5rem',
                    border: '1px solid #E5E7EB',
                  }}
                />
                <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>{shade}</div>
                <div style={{ fontSize: '0.625rem', color: '#6B7280', fontFamily: 'monospace' }}>
                  {color}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Semantic Colors */}
        <div>
          <h3 style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '1rem', color: '#1A1A1A' }}>
            Semantic Colors
          </h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {[
              { name: 'Success', color: colors.success },
              { name: 'Warning', color: colors.warning },
              { name: 'Error', color: colors.error },
              { name: 'Info', color: colors.info },
            ].map(({ name, color }) => (
              <div key={name} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '4rem',
                    height: '4rem',
                    backgroundColor: color,
                    borderRadius: '0.375rem',
                    marginBottom: '0.5rem',
                    border: '1px solid #E5E7EB',
                  }}
                />
                <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>{name}</div>
                <div style={{ fontSize: '0.625rem', color: '#6B7280', fontFamily: 'monospace' }}>
                  {color}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background Colors */}
        <div>
          <h3 style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '1rem', color: '#1A1A1A' }}>
            Background & Surface
          </h3>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {[
              { name: 'Background', color: colors.background },
              { name: 'Surface', color: colors.surface },
              { name: 'Border', color: colors.border },
            ].map(({ name, color }) => (
              <div key={name} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '4rem',
                    height: '4rem',
                    backgroundColor: color,
                    borderRadius: '0.375rem',
                    marginBottom: '0.5rem',
                    border: '2px solid #E5E7EB',
                  }}
                />
                <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>{name}</div>
                <div style={{ fontSize: '0.625rem', color: '#6B7280', fontFamily: 'monospace' }}>
                  {color}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Typography: Story = {
  render: () => (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem', color: '#1A1A1A' }}>
        Typography System
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <h1 style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.25rem',
            fontWeight: 600,
            lineHeight: 1.4,
            color: '#1A1A1A',
            margin: 0,
          }}>
            Page Heading - 20px, SemiBold, Line height 1.4
          </h1>
          <p style={{ fontSize: '0.75rem', color: '#6B7280', margin: '0.25rem 0 0 0' }}>
            Used for main page titles and card headers
          </p>
        </div>

        <div>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: 1.5,
            color: '#6B7280',
            margin: 0,
          }}>
            Subheading - 14px, Regular, Line height 1.5
          </p>
          <p style={{ fontSize: '0.75rem', color: '#6B7280', margin: '0.25rem 0 0 0' }}>
            Used for subtitles and secondary information
          </p>
        </div>

        <div>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: 1.5,
            color: '#1A1A1A',
            margin: 0,
          }}>
            Body text - 14px, Regular
          </p>
          <p style={{ fontSize: '0.75rem', color: '#6B7280', margin: '0.25rem 0 0 0' }}>
            Used for main content and descriptions
          </p>
        </div>

        <div>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: 1.5,
            color: '#6B7280',
            margin: 0,
          }}>
            Small text - 12px
          </p>
          <p style={{ fontSize: '0.75rem', color: '#6B7280', margin: '0.25rem 0 0 0' }}>
            Used for helper text, captions, and meta information
          </p>
        </div>
      </div>
    </div>
  ),
};

export const ComponentShowcase: Story = {
  render: () => (
    <div style={{ 
      fontFamily: 'Inter, sans-serif',
      backgroundColor: '#F4F5F8',
      padding: '2rem',
      minHeight: '100vh'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{
          fontSize: '1.25rem',
          fontWeight: 600,
          lineHeight: 1.4,
          color: '#1A1A1A',
          marginBottom: '2rem',
        }}>
          Design System Components
        </h1>

        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
          {/* Buttons Section */}
          <div style={{
            backgroundColor: '#FFFFFF',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
          }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '0.5rem' }}>
              Buttons
            </h2>
            <p style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '1.5rem' }}>
              All button variants and sizes
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
              <div>
                <Button 
                  variant="primary" 
                  leftIcon={<Add />}
                >
                  With Icon
                </Button>
              </div>
            </div>
          </div>

          {/* Inputs Section */}
          <div style={{
            backgroundColor: '#FFFFFF',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
          }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '0.5rem' }}>
              Inputs
            </h2>
            <p style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '1.5rem' }}>
              Form inputs with floating labels
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Input 
                label="Email Address" 
                type="email"
                startIcon={<Email />}
              />
              <Input 
                label="Password" 
                type="password"
                helperText="Must be at least 8 characters"
              />
              <Input 
                label="Confirm Password" 
                type="password"
                error={true}
                errorMessage="Passwords do not match"
              />
            </div>
          </div>

          {/* Status Indicators Section */}
          <div style={{
            backgroundColor: '#FFFFFF',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
          }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '0.5rem' }}>
              Status Indicators
            </h2>
            <p style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '1.5rem' }}>
              Using semantic colors
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ 
                padding: '0.75rem', 
                backgroundColor: '#dcfce7', 
                borderRadius: '0.375rem',
                color: '#166534',
                fontSize: '0.875rem'
              }}>
                ✓ Success: Operation completed successfully
              </div>
              <div style={{ 
                padding: '0.75rem', 
                backgroundColor: '#fef3c7', 
                borderRadius: '0.375rem',
                color: '#92400e',
                fontSize: '0.875rem'
              }}>
                ⚠ Warning: Please review your settings
              </div>
              <div style={{ 
                padding: '0.75rem', 
                backgroundColor: '#fee2e2', 
                borderRadius: '0.375rem',
                color: '#991b1b',
                fontSize: '0.875rem'
              }}>
                ✕ Error: Something went wrong
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
