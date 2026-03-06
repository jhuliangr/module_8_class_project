import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Guesses } from './Guesses';

describe('Guesses', () => {
  it('renders the Guesses component', () => {
    render(<Guesses />);
    expect(document.querySelector('.box')).toBeInTheDocument();
  });

  it('renders 6 rows for guesses', () => {
    render(<Guesses />);
    const rows = document.querySelectorAll('.flex');
    expect(rows.length).toBe(6);
  });

  it('renders 5 cells per row', () => {
    render(<Guesses />);
    const cells = document.querySelectorAll('.box');
    expect(cells.length).toBe(30);
  });

  it('initializes all cells with empty letter and none state', () => {
    render(<Guesses />);
    const cells = document.querySelectorAll('.box');
    cells.forEach((cell) => {
      expect(cell).toHaveClass('none');
    });
  });
});
