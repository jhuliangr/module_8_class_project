import { describe, it, expect, vi } from 'vitest';
import { simulateKeyDown } from './utils';

describe('simulateKeyDown', () => {
  it('should dispatch a keyboard event', () => {
    const dispatchEventSpy = vi.spyOn(document, 'dispatchEvent');

    simulateKeyDown('A');

    expect(dispatchEventSpy).toHaveBeenCalledTimes(1);

    const event = dispatchEventSpy.mock.calls[0][0] as KeyboardEvent;
    expect(event.type).toBe('keydown');
    expect(event.key).toBe('A');
    expect(event.code).toBe('A');
    expect(event.bubbles).toBe(true);
    expect(event.cancelable).toBe(true);

    dispatchEventSpy.mockRestore();
  });

  it('should dispatch event with different keys', () => {
    const dispatchEventSpy = vi.spyOn(document, 'dispatchEvent');

    simulateKeyDown('Enter');

    const event = dispatchEventSpy.mock.calls[0][0] as KeyboardEvent;
    expect(event.key).toBe('Enter');
    expect(event.code).toBe('Enter');

    dispatchEventSpy.mockRestore();
  });
});
