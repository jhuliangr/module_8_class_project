import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { CellComponent } from './Cell';

describe('CellComponent', () => {
  it('renders with box class', () => {
    render(<CellComponent letter="" state="none" />);
    const cell = document.querySelector('.box');
    expect(cell).toBeInTheDocument();
  });

  it('applies correct state class', () => {
    render(<CellComponent letter="" state="correct" />);
    const cell = document.querySelector('.box');
    expect(cell).toHaveClass('box correct');
  });

  it('applies exist state class', () => {
    render(<CellComponent letter="" state="exist" />);
    const cell = document.querySelector('.box');
    expect(cell).toHaveClass('box exist');
  });

  it('applies none state class', () => {
    render(<CellComponent letter="" state="none" />);
    const cell = document.querySelector('.box');
    expect(cell).toHaveClass('box none');
  });

  it('renders content based on letter prop', () => {
    render(<CellComponent letter="A" state="none" />);
    const cell = document.querySelector('.box');
    expect(cell?.textContent).toBe(' ');
  });
});
