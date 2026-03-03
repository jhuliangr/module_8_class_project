import type React from 'react';
import { KEYBOARD } from './constants';
import './styles.css';

interface Props {
  children: React.ReactNode;
}
export const Keyboard: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex gap-5">
      <div className="keys-1">
        {KEYBOARD.filter((_, b) => b % 2 === 0).map((row, index) => (
          <div key={`left-${index}`} className="flex justify-end">
            {row.map((letter) => (
              <button key={letter}>{letter}</button>
            ))}
          </div>
        ))}
      </div>
      <div className="guess-container">
        {children}
        <div className="whole-keyboard">
          {KEYBOARD.reduce((acc: string[][], current, index) => {
            if (index % 2 === 0) {
              acc.push([...current, ...KEYBOARD[index + 1]]);
            }
            return acc;
          }, []).map((row, index) => (
            <div key={`left-${index}`} className="flex">
              {row.map((letter) => (
                <button key={letter} className="little-key-button">
                  {letter}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="keys-2">
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
