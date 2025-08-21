import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { RadioButton } from './RadioButton';

describe('RadioButton', () => {
  it('renders radio button', () => {
    render(<RadioButton label="Test Radio" />);
    
    const radioButton = screen.getByRole('radio');
    expect(radioButton).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<RadioButton label="Test Radio" />);
    
    expect(screen.getByText('Test Radio')).toBeInTheDocument();
  });

  it('can be checked', () => {
    render(<RadioButton label="Test Radio" />);
    
    const radioButton = screen.getByRole('radio') as HTMLInputElement;
    
    fireEvent.click(radioButton);
    expect(radioButton.checked).toBe(true);
  });

  it('can be disabled', () => {
    render(<RadioButton label="Test Radio" disabled />);
    
    const radioButton = screen.getByRole('radio');
    expect(radioButton).toBeDisabled();
  });

  it('applies error styling', () => {
    render(<RadioButton label="Test Radio" error />);
    
    const wrapper = screen.getByRole('radio').closest('.radio-wrapper');
    expect(wrapper).toHaveClass('radio-wrapper--error');
  });

  it('handles different sizes', () => {
    const { rerender } = render(<RadioButton label="Test Radio" size="sm" />);
    
    let wrapper = screen.getByRole('radio').closest('.radio-wrapper');
    expect(wrapper).toHaveClass('radio-wrapper--sm');
    
    rerender(<RadioButton label="Test Radio" size="lg" />);
    wrapper = screen.getByRole('radio').closest('.radio-wrapper');
    expect(wrapper).toHaveClass('radio-wrapper--lg');
  });

  it('calls onChange when clicked', () => {
    const handleChange = jest.fn();
    render(<RadioButton label="Test Radio" onChange={handleChange} />);
    
    const radioButton = screen.getByRole('radio');
    fireEvent.click(radioButton);
    
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
