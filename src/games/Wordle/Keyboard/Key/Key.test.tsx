import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Key } from './Key';
import * as utils from './utils';

vi.mock('./utils', () => ({
  simulateKeyDown: vi.fn(),
}));

describe('Key', () => {
  it('renders with the letter', () => {
    render(<Key letter="A" className="key" />);
    expect(screen.getByText('A')).toBeInTheDocument();
  });

  it('renders as a button', () => {
    render(<Key letter="A" className="key" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('applies the provided className', () => {
    render(<Key letter="A" className="correct" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('correct');
  });

  it('calls simulateKeyDown on click', () => {
    render(<Key letter="A" className="key" />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(utils.simulateKeyDown).toHaveBeenCalledWith('A');
  });

  it('applies different class when className includes correct', () => {
    render(<Key letter="B" className="correct" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('correct');
  });

  it('applies different class when className includes exist', () => {
    render(<Key letter="C" className="exist" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('exist');
  });
});
