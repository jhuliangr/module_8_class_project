import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Wordle from './Wordle';

describe('Wordle Game', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders the Wordle game component', () => {
    render(<Wordle />);
    expect(document.querySelector('.max-w-screen')).toBeInTheDocument();
  });

  it('renders the Guesses component', () => {
    render(<Wordle />);
    expect(document.querySelector('.box')).toBeInTheDocument();
  });

  it('renders the Keyboard component', () => {
    render(<Wordle />);
    expect(document.querySelector('.whole-keyboard')).toBeInTheDocument();
  });

  it('handles keyboard input for letters', () => {
    render(<Wordle />);

    fireEvent.keyDown(window, { key: 'a' });

    const buttons = document.querySelectorAll('button');
    const usedButtons = Array.from(buttons).filter((btn) =>
      btn.className.includes('used-'),
    );
    expect(usedButtons.length).toBeGreaterThan(0);
  });

  it('does not handle keys when alt, ctrl, meta or shift is pressed', () => {
    render(<Wordle />);

    const initialUsedKeys = document.querySelectorAll(
      'button[class*="used-"]',
    ).length;

    fireEvent.keyDown(window, { key: 'a', altKey: true });
    fireEvent.keyDown(window, { key: 'b', ctrlKey: true });
    fireEvent.keyDown(window, { key: 'c', metaKey: true });
    fireEvent.keyDown(window, { key: 'd', shiftKey: true });

    expect(document.querySelectorAll('button[class*="used-"]').length).toBe(
      initialUsedKeys,
    );
  });

  it('handles multiple letter inputs', () => {
    render(<Wordle />);

    fireEvent.keyDown(window, { key: 'a' });
    fireEvent.keyDown(window, { key: 'b' });
    fireEvent.keyDown(window, { key: 'c' });
    fireEvent.keyDown(window, { key: 'd' });
    fireEvent.keyDown(window, { key: 'e' });

    const buttons = document.querySelectorAll('button');
    const usedButtons = Array.from(buttons).filter((btn) =>
      btn.className.includes('used-'),
    );
    expect(usedButtons.length).toBeGreaterThanOrEqual(5);
  });
});
