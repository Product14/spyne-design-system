import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dropdown } from './Dropdown';

const mockOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3', disabled: true },
];

describe('Dropdown', () => {
  it('renders with placeholder', () => {
    render(
      <Dropdown
        options={mockOptions}
        placeholder="Select an option"
      />
    );
    
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(
      <Dropdown
        options={mockOptions}
        label="Test Label"
        placeholder="Select an option"
      />
    );
    
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('opens dropdown menu when clicked', async () => {
    const user = userEvent.setup();
    render(
      <Dropdown
        options={mockOptions}
        placeholder="Select an option"
      />
    );
    
    const trigger = screen.getByRole('button');
    await user.click(trigger);
    
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('selects an option when clicked', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    
    render(
      <Dropdown
        options={mockOptions}
        placeholder="Select an option"
        onChange={handleChange}
      />
    );
    
    const trigger = screen.getByRole('button');
    await user.click(trigger);
    
    const option1 = screen.getByText('Option 1');
    await user.click(option1);
    
    expect(handleChange).toHaveBeenCalledWith('option1', mockOptions[0]);
  });

  it('shows selected option', () => {
    render(
      <Dropdown
        options={mockOptions}
        value="option2"
        placeholder="Select an option"
      />
    );
    
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('disables dropdown when disabled prop is true', () => {
    render(
      <Dropdown
        options={mockOptions}
        disabled={true}
        placeholder="Select an option"
      />
    );
    
    const trigger = screen.getByRole('button');
    expect(trigger).toBeDisabled();
  });

  it('shows error state', () => {
    render(
      <Dropdown
        options={mockOptions}
        error={true}
        errorMessage="This field is required"
        placeholder="Select an option"
      />
    );
    
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('shows helper text', () => {
    render(
      <Dropdown
        options={mockOptions}
        helperText="Choose your preferred option"
        placeholder="Select an option"
      />
    );
    
    expect(screen.getByText('Choose your preferred option')).toBeInTheDocument();
  });

  it('filters options when searchable', async () => {
    const user = userEvent.setup();
    render(
      <Dropdown
        options={mockOptions}
        searchable={true}
        placeholder="Select an option"
      />
    );
    
    const trigger = screen.getByRole('button');
    await user.click(trigger);
    
    const searchInput = screen.getByPlaceholderText('Search...');
    await user.type(searchInput, 'Option 1');
    
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.queryByText('Option 2')).not.toBeInTheDocument();
  });

  it('closes dropdown when clicking outside', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <Dropdown
          options={mockOptions}
          placeholder="Select an option"
        />
        <div data-testid="outside">Outside element</div>
      </div>
    );
    
    const trigger = screen.getByRole('button');
    await user.click(trigger);
    
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    
    const outside = screen.getByTestId('outside');
    await user.click(outside);
    
    await waitFor(() => {
      expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
    });
  });

  it('handles keyboard navigation', async () => {
    const user = userEvent.setup();
    render(
      <Dropdown
        options={mockOptions}
        placeholder="Select an option"
      />
    );
    
    const trigger = screen.getByRole('button');
    trigger.focus();
    
    // Open dropdown with Enter
    await user.keyboard('{Enter}');
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    
    // Close with Escape
    await user.keyboard('{Escape}');
    await waitFor(() => {
      expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
    });
  });

  it('does not select disabled options', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    
    render(
      <Dropdown
        options={mockOptions}
        placeholder="Select an option"
        onChange={handleChange}
      />
    );
    
    const trigger = screen.getByRole('button');
    await user.click(trigger);
    
    const disabledOption = screen.getByText('Option 3');
    await user.click(disabledOption);
    
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('applies correct size classes', () => {
    const { rerender } = render(
      <Dropdown
        options={mockOptions}
        size="sm"
        placeholder="Select an option"
      />
    );
    
    let trigger = screen.getByRole('button');
    expect(trigger).toHaveClass('dropdown__trigger--sm');
    
    rerender(
      <Dropdown
        options={mockOptions}
        size="lg"
        placeholder="Select an option"
      />
    );
    
    trigger = screen.getByRole('button');
    expect(trigger).toHaveClass('dropdown__trigger--lg');
  });
});
