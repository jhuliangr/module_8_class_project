import { describe, it, expect } from 'vitest';
import { initState } from './initialState';
import { ROWS, WORDS_LENGTH } from './constants';

describe('initState', () => {
  it('should create a grid with correct number of rows', () => {
    const grid = initState();
    expect(grid).toHaveLength(ROWS);
  });

  it('should create a grid with correct number of columns', () => {
    const grid = initState();
    grid.forEach((row) => {
      expect(row).toHaveLength(WORDS_LENGTH);
    });
  });

  it('should initialize all cells with empty letter and none state', () => {
    const grid = initState();
    grid.forEach((row) => {
      row.forEach((cell) => {
        expect(cell.letter).toBe('');
        expect(cell.state).toBe('none');
      });
    });
  });

  it('should return a new array each time', () => {
    const grid1 = initState();
    const grid2 = initState();
    expect(grid1).not.toBe(grid2);
    expect(grid1[0]).not.toBe(grid2[0]);
  });
});
