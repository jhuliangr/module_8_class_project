export const simulateKeyDown = (key: string) => {
  const event = new KeyboardEvent('keydown', {
    key,
    code: key,
    bubbles: true,
    cancelable: true,
  });

  document.dispatchEvent(event);
};
