import { useEffect, useState } from 'react';
import { Guesses } from './Guesses';
import { Keyboard } from './Keyboard';
import { WORDS_LENGTH } from './Guesses/constants';

const Wordle: React.FC = () => {
  const [pos, setPos] = useState<number>(0);
  const [usedKeys, setUsedKeys] = useState<string[]>([]);

  const handleKeyDownEvent = (e: KeyboardEvent) => {
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) {
      return;
    }

    if ((e.key >= 'a' && e.key <= 'z') || (e.key >= 'A' && e.key <= 'Z')) {
      setUsedKeys((prev) => [...prev, e.key.toLowerCase()]);

      setPos((prev) => {
        if (prev === WORDS_LENGTH - 1) {
          return 0;
        }
        return ++prev;
      });
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDownEvent);
    return () => {
      window.removeEventListener('keydown', handleKeyDownEvent);
    };
  }, [handleKeyDownEvent]);

  return (
    <div className="max-w-screen overflow-x-auto">
      <Keyboard word="hello" pos={pos} usedKeys={usedKeys}>
        <Guesses />
      </Keyboard>
    </div>
  );
};
export default Wordle;
