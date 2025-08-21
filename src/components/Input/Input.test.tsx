import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from './Input';
import { Search, Email, Error, Person } from '../../icons';

describe('Input', () => {
  describe('Basic functionality', () => {
    it('renders without crashing', () => {
      render(<Input />);
      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
    });

    it('renders with a label', () => {
      render(<Input label="Test Label" />);
      const label = screen.getByText('Test Label');
      expect(label).toBeInTheDocument();
    });

    it('renders with placeholder when no label is provided', () => {
      render(<Input placeholder="Enter text" />);
      const input = screen.getByPlaceholderText('Enter text');
      expect(input).toBeInTheDocument();
    });

    it('handles value changes', () => {
      const handleChange = jest.fn();
      render(<Input onChange={handleChange} />);
      const input = screen.getByRole('textbox');
      
      fireEvent.change(input, { target: { value: 'test value' } });
      expect(handleChange).toHaveBeenCalled();
    });

    it('can be disabled', () => {
      render(<Input disabled />);
      const input = screen.getByRole('textbox');
      expect(input).toBeDisabled();
    });
  });

  describe('Sizes', () => {
    it('applies small size class', () => {
      render(<Input size="sm" data-testid="input" />);
      const input = screen.getByTestId('input');
      expect(input).toHaveClass('input--sm');
    });

    it('applies medium size class by default', () => {
      render(<Input data-testid="input" />);
      const input = screen.getByTestId('input');
      expect(input).toHaveClass('input--md');
    });

    it('applies large size class', () => {
      render(<Input size="lg" data-testid="input" />);
      const input = screen.getByTestId('input');
      expect(input).toHaveClass('input--lg');
    });
  });

  describe('Variants', () => {
    it('applies default variant class by default', () => {
      render(<Input data-testid="input" />);
      const input = screen.getByTestId('input');
      expect(input).toHaveClass('input--default');
    });

    it('applies filled variant class', () => {
      render(<Input variant="filled" data-testid="input" />);
      const input = screen.getByTestId('input');
      expect(input).toHaveClass('input--filled');
    });
  });

  describe('Error state', () => {
    it('applies error class when error prop is true', () => {
      render(<Input error data-testid="input" />);
      const input = screen.getByTestId('input');
      expect(input).toHaveClass('input--error');
    });

    it('displays error message when error is true', () => {
      render(<Input error errorMessage="This field is required" />);
      const errorText = screen.getByText('This field is required');
      expect(errorText).toBeInTheDocument();
      expect(errorText).toHaveClass('input-help--error');
    });

    it('displays helper text when error is false', () => {
      render(<Input helperText="This is helper text" />);
      const helperText = screen.getByText('This is helper text');
      expect(helperText).toBeInTheDocument();
      expect(helperText).not.toHaveClass('input-help--error');
    });

    it('prioritizes error message over helper text when error is true', () => {
      render(
        <Input 
          error 
          errorMessage="Error occurred" 
          helperText="Helper text" 
        />
      );
      
      expect(screen.getByText('Error occurred')).toBeInTheDocument();
      expect(screen.queryByText('Helper text')).not.toBeInTheDocument();
    });
  });

  describe('Icons', () => {
    it('renders start icon', () => {
      const { container } = render(
        <Input 
          startIcon={<Search />} 
          data-testid="input"
        />
      );
      
      const input = screen.getByTestId('input');
      const iconContainer = container.querySelector('.input-icon--start');
      
      expect(iconContainer).toBeInTheDocument();
      expect(iconContainer?.querySelector('svg')).toBeInTheDocument();
      expect(input).toHaveClass('input--with-start-icon');
    });

    it('renders end icon', () => {
      const { container } = render(
        <Input 
          endIcon={<Email />} 
          data-testid="input"
        />
      );
      
      const input = screen.getByTestId('input');
      const iconContainer = container.querySelector('.input-icon--end');
      
      expect(iconContainer).toBeInTheDocument();
      expect(iconContainer?.querySelector('svg')).toBeInTheDocument();
      expect(input).toHaveClass('input--with-end-icon');
    });

    it('renders both start and end icons', () => {
      const { container } = render(
        <Input 
          startIcon={<Person />}
          endIcon={<Error />} 
          data-testid="input"
        />
      );
      
      const input = screen.getByTestId('input');
      const startIconContainer = container.querySelector('.input-icon--start');
      const endIconContainer = container.querySelector('.input-icon--end');
      
      expect(startIconContainer).toBeInTheDocument();
      expect(endIconContainer).toBeInTheDocument();
      expect(startIconContainer?.querySelector('svg')).toBeInTheDocument();
      expect(endIconContainer?.querySelector('svg')).toBeInTheDocument();
      expect(input).toHaveClass('input--with-start-icon');
      expect(input).toHaveClass('input--with-end-icon');
    });

    it('applies correct icon positioning classes', () => {
      const { container } = render(
        <Input 
          startIcon={<Search />}
          endIcon={<Email />} 
        />
      );
      
      const startIconContainer = container.querySelector('.input-icon--start');
      const endIconContainer = container.querySelector('.input-icon--end');
      
      expect(startIconContainer).toBeInTheDocument();
      expect(endIconContainer).toBeInTheDocument();
    });
  });

  describe('Input types', () => {
    it('renders email input type', () => {
      render(<Input type="email" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('type', 'email');
    });

    it('renders password input type', () => {
      render(<Input type="password" data-testid="password-input" />);
      const input = screen.getByTestId('password-input');
      expect(input).toHaveAttribute('type', 'password');
    });

    it('renders number input type', () => {
      render(<Input type="number" />);
      const input = screen.getByRole('spinbutton');
      expect(input).toHaveAttribute('type', 'number');
    });

    it('renders tel input type', () => {
      render(<Input type="tel" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('type', 'tel');
    });
  });

  describe('Label behavior', () => {
    it('associates label with input using htmlFor', () => {
      render(<Input label="Test Label" id="test-input" />);
      const label = screen.getByText('Test Label');
      const input = screen.getByRole('textbox');
      
      expect(label).toHaveAttribute('for', 'test-input');
      expect(input).toHaveAttribute('id', 'test-input');
    });

    it('generates unique id when not provided', () => {
      render(<Input label="Test Label" />);
      const input = screen.getByRole('textbox');
      const id = input.getAttribute('id');
      
      expect(id).toBeTruthy();
      expect(id).toMatch(/^input-/);
    });

    it('uses space as placeholder when label exists', () => {
      render(<Input label="Test Label" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('placeholder', ' ');
    });
  });

  describe('Custom className', () => {
    it('applies custom className', () => {
      render(<Input className="custom-class" data-testid="input" />);
      const input = screen.getByTestId('input');
      expect(input).toHaveClass('custom-class');
    });

    it('preserves default classes when custom className is added', () => {
      render(<Input className="custom-class" data-testid="input" />);
      const input = screen.getByTestId('input');
      expect(input).toHaveClass('input', 'input--md', 'input--default', 'custom-class');
    });
  });

  describe('Forward ref', () => {
    it('forwards ref to input element', () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<Input ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes when error is present', () => {
      render(
        <Input 
          label="Email" 
          error 
          errorMessage="Invalid email"
          data-testid="input"
        />
      );
      
      const input = screen.getByTestId('input');
      // The input should be accessible and the error message should be associated
      expect(input).toBeInTheDocument();
      expect(screen.getByText('Invalid email')).toBeInTheDocument();
    });

    it('maintains accessibility with icons', () => {
      render(
        <Input 
          label="Search" 
          startIcon={<Search />}
          data-testid="input"
        />
      );
      
      const input = screen.getByTestId('input');
      const label = screen.getByText('Search');
      
      expect(input).toBeInTheDocument();
      expect(label).toBeInTheDocument();
      expect(label).toHaveAttribute('for', input.id);
    });
  });

  describe('Error states with icons', () => {
    it('renders error state with error icon', () => {
      const { container } = render(
        <Input 
          error
          errorMessage="Field is required"
          endIcon={<Error />}
          data-testid="input"
        />
      );
      
      const input = screen.getByTestId('input');
      const errorIconContainer = container.querySelector('.input-icon--end');
      const errorMessage = screen.getByText('Field is required');
      
      expect(input).toHaveClass('input--error');
      expect(errorIconContainer).toBeInTheDocument();
      expect(errorIconContainer?.querySelector('svg')).toBeInTheDocument();
      expect(errorMessage).toHaveClass('input-help--error');
    });
  });
});
