import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Keyboard } from './Keyboard';

describe('Keyboard', () => {
  it('renders the Keyboard component', () => {
    render(
      <Keyboard word="hello" pos={0} usedKeys={[]}>
        <div>Children</div>
      </Keyboard>,
    );
    expect(document.querySelector('.flex')).toBeInTheDocument();
  });

  it('renders children components', () => {
    render(
      <Keyboard word="hello" pos={0} usedKeys={[]}>
        <div data-testid="children">Test Children</div>
      </Keyboard>,
    );
    expect(screen.getByTestId('children')).toBeInTheDocument();
  });

  it('renders keyboard keys from KEYBOARD constant', () => {
    render(
      <Keyboard word="hello" pos={0} usedKeys={[]}>
        <div />
      </Keyboard>,
    );

    const buttons = document.querySelectorAll(
      '.keys-1 button, .keys-2 button, .whole-keyboard button',
    );
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('applies correct class to used keys', () => {
    render(
      <Keyboard word="hello" pos={0} usedKeys={['h', 'e']}>
        <div />
      </Keyboard>,
    );

    const correctKeys = document.querySelectorAll('.used-correct');
    expect(correctKeys.length).toBe(2);
  });

  it('applies exist class for letters in word but not in correct position', () => {
    render(
      <Keyboard word="hello" pos={1} usedKeys={['l']}>
        <div />
      </Keyboard>,
    );

    const existKeys = document.querySelectorAll('.used-exist');
    expect(existKeys.length).toBe(2);
  });
});
