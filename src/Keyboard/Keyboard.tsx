import type React from 'react';
import { KEYBOARD } from './constants';

interface Props {
  children: React.ReactNode;
}
export const Keyboard: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div className="order-1 md:order-none">
        {KEYBOARD.filter((_, b) => b % 2 === 0).map((row, index) => (
          <div key={`left-${index}`} className="flex justify-end">
            {row.map((letter) => (
              <button key={letter}>{letter}</button>
            ))}
          </div>
        ))}
      </div>
      <div className="order-0 md:order-none guess-container">{children}</div>
      <div className="order-1 md:order-none">
        {KEYBOARD.filter((_, b) => b % 2 !== 0).map((row, index) => (
          <div key={`left-${index}`} className="flex justify-start">
            {row.map((letter) => (
              <button key={letter}>{letter}</button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
