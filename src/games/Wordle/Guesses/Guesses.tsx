import { useState } from 'react';
import { initState } from './initialState';
import type { GuessGrid } from './types';
import { CellComponent } from './Cell';

interface Props {}

export const Guesses: React.FC<Props> = ({}) => {
  const [guesses, _setGuesses] = useState<GuessGrid>(() => initState());

  return (
    <div>
      {guesses.map((word, index) => (
        <div key={index} className="flex">
          {word.map((cell, i) => (
            <CellComponent
              letter={cell.letter}
              state={cell.state}
              key={`${cell.letter}-${i}-${index}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
