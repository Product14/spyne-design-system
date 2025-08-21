import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Chip } from './Chip';
import { MaterialSymbols } from '../../icons/MaterialSymbols';

describe('Chip', () => {
  // Basic rendering tests
  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<Chip>Test Chip</Chip>);
      const chip = screen.getByText('Test Chip');
      expect(chip).toBeInTheDocument();
      expect(chip.closest('.chip')).toHaveClass('chip--neutral', 'chip--md');
    });

    it('renders with custom className', () => {
      render(<Chip className="custom-class">Test</Chip>);
      const chip = screen.getByText('Test');
      expect(chip.closest('.chip')).toHaveClass('custom-class');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<Chip ref={ref}>Test</Chip>);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });

  // Size variant tests
  describe('Size Variants', () => {
    it('renders small size correctly', () => {
      render(<Chip size="sm">Small</Chip>);
      const chip = screen.getByText('Small');
      expect(chip.closest('.chip')).toHaveClass('chip--sm');
    });

    it('renders medium size correctly', () => {
      render(<Chip size="md">Medium</Chip>);
      const chip = screen.getByText('Medium');
      expect(chip.closest('.chip')).toHaveClass('chip--md');
    });

    it('renders large size correctly', () => {
      render(<Chip size="lg">Large</Chip>);
      const chip = screen.getByText('Large');
      expect(chip.closest('.chip')).toHaveClass('chip--lg');
    });
  });

  // Color variant tests
  describe('Color Variants', () => {
    const variants = ['primary', 'secondary', 'success', 'warning', 'error', 'info', 'neutral'] as const;

    variants.forEach((variant) => {
      it(`renders ${variant} variant correctly`, () => {
        render(<Chip variant={variant}>{variant}</Chip>);
        const chip = screen.getByText(variant);
        expect(chip.closest('.chip')).toHaveClass(`chip--${variant}`);
      });
    });
  });

  // State tests
  describe('States', () => {
    it('renders disabled state correctly', () => {
      render(<Chip disabled>Disabled</Chip>);
      const chip = screen.getByText('Disabled');
      expect(chip.closest('.chip')).toHaveClass('chip--disabled');
      expect(chip.closest('.chip')).toHaveAttribute('aria-disabled', 'true');
    });

    it('renders selected state correctly', () => {
      render(<Chip selected>Selected</Chip>);
      const chip = screen.getByText('Selected');
      expect(chip.closest('.chip')).toHaveClass('chip--selected');
    });

    it('renders clickable state correctly', () => {
      render(<Chip clickable>Clickable</Chip>);
      const chip = screen.getByText('Clickable');
      expect(chip.closest('.chip')).toHaveClass('chip--clickable');
      expect(chip.closest('.chip')).toHaveAttribute('role', 'button');
      expect(chip.closest('.chip')).toHaveAttribute('tabIndex', '0');
    });

    it('renders dismissible state correctly', () => {
      render(<Chip dismissible>Dismissible</Chip>);
      const chip = screen.getByText('Dismissible');
      expect(chip.closest('.chip')).toHaveClass('chip--dismissible');
      expect(screen.getByRole('button', { name: 'Remove' })).toBeInTheDocument();
    });
  });

  // Icon tests
  describe('Icons', () => {
    it('renders left icon correctly', () => {
      render(
        <Chip leftIcon={<MaterialSymbols.Person />}>
          With Left Icon
        </Chip>
      );
      const chip = screen.getByText('With Left Icon');
      const iconContainer = chip.closest('.chip')?.querySelector('.chip__icon--left');
      expect(iconContainer).toBeInTheDocument();
    });

    it('renders right icon correctly', () => {
      render(
        <Chip rightIcon={<MaterialSymbols.Settings />}>
          With Right Icon
        </Chip>
      );
      const chip = screen.getByText('With Right Icon');
      const iconContainer = chip.closest('.chip')?.querySelector('.chip__icon--right');
      expect(iconContainer).toBeInTheDocument();
    });

    it('does not render right icon when dismissible', () => {
      render(
        <Chip dismissible rightIcon={<MaterialSymbols.Settings />}>
          Dismissible with Right Icon
        </Chip>
      );
      const chip = screen.getByText('Dismissible with Right Icon');
      const rightIconContainer = chip.closest('.chip')?.querySelector('.chip__icon--right');
      const dismissButton = screen.getByRole('button', { name: 'Remove' });
      
      expect(rightIconContainer).not.toBeInTheDocument();
      expect(dismissButton).toBeInTheDocument();
    });

    it('renders both left icon and dismiss button', () => {
      render(
        <Chip dismissible leftIcon={<MaterialSymbols.Person />}>
          With Both
        </Chip>
      );
      const chip = screen.getByText('With Both');
      const leftIconContainer = chip.closest('.chip')?.querySelector('.chip__icon--left');
      const dismissButton = screen.getByRole('button', { name: 'Remove' });
      
      expect(leftIconContainer).toBeInTheDocument();
      expect(dismissButton).toBeInTheDocument();
    });
  });

  // Interaction tests
  describe('Interactions', () => {
    it('calls onClick when clicked', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      
      render(<Chip onClick={handleClick}>Clickable</Chip>);
      const chip = screen.getByText('Clickable');
      
      await user.click(chip);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      
      render(<Chip onClick={handleClick} disabled>Disabled</Chip>);
      const chip = screen.getByText('Disabled');
      
      await user.click(chip);
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('calls onDismiss when dismiss button is clicked', async () => {
      const user = userEvent.setup();
      const handleDismiss = jest.fn();
      
      render(<Chip dismissible onDismiss={handleDismiss}>Dismissible</Chip>);
      const dismissButton = screen.getByRole('button', { name: 'Remove' });
      
      await user.click(dismissButton);
      expect(handleDismiss).toHaveBeenCalledTimes(1);
    });

    it('does not call onDismiss when disabled', async () => {
      const user = userEvent.setup();
      const handleDismiss = jest.fn();
      
      render(<Chip dismissible disabled onDismiss={handleDismiss}>Disabled</Chip>);
      const dismissButton = screen.getByRole('button', { name: 'Remove' });
      
      await user.click(dismissButton);
      expect(handleDismiss).not.toHaveBeenCalled();
    });

    it('prevents event propagation on dismiss', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      const handleDismiss = jest.fn();
      
      render(
        <Chip dismissible onClick={handleClick} onDismiss={handleDismiss}>
          Both Actions
        </Chip>
      );
      
      const dismissButton = screen.getByRole('button', { name: 'Remove' });
      await user.click(dismissButton);
      
      expect(handleDismiss).toHaveBeenCalledTimes(1);
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  // Keyboard navigation tests
  describe('Keyboard Navigation', () => {
    it('supports keyboard navigation when clickable', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      
      render(<Chip clickable onClick={handleClick}>Clickable</Chip>);
      const chip = screen.getByText('Clickable');
      
      chip.focus();
      expect(chip).toHaveFocus();
      
      await user.keyboard('{Enter}');
      expect(handleClick).toHaveBeenCalledTimes(1);
      
      await user.keyboard('{Space}');
      expect(handleClick).toHaveBeenCalledTimes(2);
    });

    it('supports keyboard navigation for dismiss button', async () => {
      const user = userEvent.setup();
      const handleDismiss = jest.fn();
      
      render(<Chip dismissible onDismiss={handleDismiss}>Dismissible</Chip>);
      const dismissButton = screen.getByRole('button', { name: 'Remove' });
      
      dismissButton.focus();
      expect(dismissButton).toHaveFocus();
      
      await user.keyboard('{Enter}');
      expect(handleDismiss).toHaveBeenCalledTimes(1);
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('has correct ARIA attributes for clickable chip', () => {
      render(<Chip clickable>Clickable</Chip>);
      const chip = screen.getByText('Clickable');
      
      expect(chip.closest('.chip')).toHaveAttribute('role', 'button');
      expect(chip.closest('.chip')).toHaveAttribute('tabIndex', '0');
    });

    it('has correct ARIA attributes for disabled chip', () => {
      render(<Chip disabled>Disabled</Chip>);
      const chip = screen.getByText('Disabled');
      
      expect(chip.closest('.chip')).toHaveAttribute('aria-disabled', 'true');
    });

    it('dismiss button has correct accessibility attributes', () => {
      render(<Chip dismissible>Dismissible</Chip>);
      const dismissButton = screen.getByRole('button', { name: 'Remove' });
      
      expect(dismissButton).toHaveAttribute('type', 'button');
      expect(dismissButton).toHaveAttribute('aria-label', 'Remove');
    });

    it('disabled dismiss button has correct attributes', () => {
      render(<Chip dismissible disabled>Disabled Dismissible</Chip>);
      const dismissButton = screen.getByRole('button', { name: 'Remove' });
      
      expect(dismissButton).toBeDisabled();
    });
  });

  // Edge cases and error handling
  describe('Edge Cases', () => {
    it('renders without children', () => {
      render(<Chip />);
      const chip = document.querySelector('.chip');
      expect(chip).toBeInTheDocument();
    });

    it('handles multiple class combinations correctly', () => {
      render(
        <Chip
          variant="primary"
          size="lg"
          selected
          clickable
          dismissible
          disabled
          className="custom"
        >
          Complex Chip
        </Chip>
      );
      
      const chip = screen.getByText('Complex Chip');
      const chipElement = chip.closest('.chip');
      
      expect(chipElement).toHaveClass(
        'chip',
        'chip--primary',
        'chip--lg',
        'chip--selected',
        'chip--clickable',
        'chip--dismissible',
        'chip--disabled',
        'custom'
      );
    });

    it('passes through HTML attributes', () => {
      render(
        <Chip data-testid="custom-chip" title="Custom Title">
          Test
        </Chip>
      );
      
      const chip = screen.getByTestId('custom-chip');
      expect(chip).toHaveAttribute('title', 'Custom Title');
    });
  });

  // Icon size tests
  describe('Icon Sizing', () => {
    it('passes correct size to icons based on chip size', () => {
      const TestIcon = ({ size }: { size?: number }) => (
        <span data-testid="test-icon" data-size={size}>Icon</span>
      );

      const { rerender } = render(
        <Chip size="sm" leftIcon={<TestIcon />}>Small</Chip>
      );
      expect(screen.getByTestId('test-icon')).toHaveAttribute('data-size', '14');

      rerender(<Chip size="md" leftIcon={<TestIcon />}>Medium</Chip>);
      expect(screen.getByTestId('test-icon')).toHaveAttribute('data-size', '16');

      rerender(<Chip size="lg" leftIcon={<TestIcon />}>Large</Chip>);
      expect(screen.getByTestId('test-icon')).toHaveAttribute('data-size', '20');
    });
  });
});
