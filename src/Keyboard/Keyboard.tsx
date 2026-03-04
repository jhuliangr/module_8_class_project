import type React from 'react';
import { KEYBOARD } from './constants';
import './Keyboard.css';
import { useEffect, useState } from 'react';
import { Key } from './Key';

interface Props {
  children: React.ReactNode;
  word: string;
  pos: number;
}

// 'non-exist' | 'exist' | 'correct'
export const Keyboard: React.FC<Props> = ({ children, word, pos }) => {
  const [usedKeys, setUsedKeys] = useState<string[]>([]);

  const handleKeyDownEvent = (e: KeyboardEvent) => {
    if ((e.key >= 'a' && e.key <= 'z') || (e.key >= 'A' && e.key <= 'Z')) {
      setUsedKeys((prev) => {
        if (prev.includes(e.key.toLowerCase())) return prev;
        return [...prev, e.key.toLowerCase()];
      });
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDownEvent);
    return () => {
      window.removeEventListener('keydown', handleKeyDownEvent);
    };
  }, []);

  return (
    <div className="flex gap-5">
      <div className="keys-1">
        {KEYBOARD.filter((_, b) => b % 2 === 0).map((row, index) => (
          <div key={`left-${index}`} className="flex justify-end">
            {row.map((letter, i) => (
              <Key
                key={`left-${letter}-${i}-${index}`}
                letter={letter}
                className={`${usedKeys.includes(letter.toLowerCase()) ? `used-${word.toLowerCase().includes(letter.toLowerCase()) ? (word[pos].toLowerCase() === letter.toLowerCase() ? 'correct' : 'exist') : 'non-exist'}` : ''}`}
              />
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
            <div key={`center-${index}`} className="flex">
              {row.map((letter, i) => (
                <Key
                  key={`center-${letter}-${i}-${index}`}
                  letter={letter}
                  className={`key ${usedKeys.includes(letter.toLowerCase()) ? `used-${word.toLowerCase().includes(letter.toLowerCase()) ? (word[pos].toLowerCase() === letter.toLowerCase() ? 'correct' : 'exist') : 'non-exist'}` : ''}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="keys-2">
        {KEYBOARD.filter((_, b) => b % 2 !== 0).map((row, index) => (
          <div key={`right-${index}`} className="flex justify-start">
            {row.map((letter, i) => (
              <Key
                key={`right-${letter}-${i}-${index}`}
                letter={letter}
                className={`${usedKeys.includes(letter.toLowerCase()) ? `used-${word.toLowerCase().includes(letter.toLowerCase()) ? (word[pos].toLowerCase() === letter.toLowerCase() ? 'correct' : 'exist') : 'non-exist'}` : ''}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
