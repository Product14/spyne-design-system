import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders checkbox', () => {
    render(<Checkbox label="Test Checkbox" />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Checkbox label="Test Checkbox" />);
    
    expect(screen.getByText('Test Checkbox')).toBeInTheDocument();
  });

  it('can be checked', () => {
    render(<Checkbox label="Test Checkbox" />);
    
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });

  it('can be disabled', () => {
    render(<Checkbox label="Test Checkbox" disabled />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });

  it('applies error styling', () => {
    render(<Checkbox label="Test Checkbox" error />);
    
    const wrapper = screen.getByRole('checkbox').closest('.checkbox-wrapper');
    expect(wrapper).toHaveClass('checkbox-wrapper--error');
  });

  it('handles different sizes', () => {
    const { rerender } = render(<Checkbox label="Test Checkbox" size="sm" />);
    
    let wrapper = screen.getByRole('checkbox').closest('.checkbox-wrapper');
    expect(wrapper).toHaveClass('checkbox-wrapper--sm');
    
    rerender(<Checkbox label="Test Checkbox" size="lg" />);
    wrapper = screen.getByRole('checkbox').closest('.checkbox-wrapper');
    expect(wrapper).toHaveClass('checkbox-wrapper--lg');
  });

  it('calls onChange when clicked', () => {
    const handleChange = jest.fn();
    render(<Checkbox label="Test Checkbox" onChange={handleChange} />);
    
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
