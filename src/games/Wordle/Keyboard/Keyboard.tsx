import type React from 'react';
import { KEYBOARD } from './constants';
import './Keyboard.css';
import { Key } from './Key';

interface Props {
  children: React.ReactNode;
  word: string;
  pos: number;
  usedKeys: string[];
}

export const Keyboard: React.FC<Props> = ({
  children,
  word,
  pos,
  usedKeys,
}) => {
  const currentLetter =
    pos >= 0 && pos < word.length ? word[pos].toLowerCase() : '';
  const createClassName = (letter: string) => {
    return `${usedKeys.includes(letter.toLowerCase()) ? `used-${word.toLowerCase().includes(letter.toLowerCase()) ? (currentLetter === letter.toLowerCase() ? 'correct' : 'exist') : 'non-exist'}` : ''}`;
  };

  return (
    <div className="flex gap-5">
      <div className="keys-1">
        {KEYBOARD.filter((_, b) => b % 2 === 0).map((row, index) => (
          <div key={`left-${index}`} className="flex justify-end">
            {row.map((letter, i) => {
              const className = createClassName(letter);
              return (
                <Key
                  key={`left-${letter}-${i}-${index}`}
                  letter={letter}
                  className={className}
                />
              );
            })}
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
            <div key={`center-${index}`} className="flex">
              {row.map((letter, i) => {
                const className = 'key ' + createClassName(letter);
                return (
                  <Key
                    key={`center-${letter}-${i}-${index}`}
                    letter={letter}
                    className={className}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="keys-2">
        {KEYBOARD.filter((_, b) => b % 2 !== 0).map((row, index) => (
          <div key={`right-${index}`} className="flex justify-start">
            {row.map((letter, i) => {
              const className = createClassName(letter);
              return (
                <Key
                  key={`right-${letter}-${i}-${index}`}
                  letter={letter}
                  className={className}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
