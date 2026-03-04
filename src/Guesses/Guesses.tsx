import { WORDS_LENGTH } from './constants';

export function Guesses() {
  return (
    <div>
      {Array.from<string>({ length: 6 })
        .fill(Array.from({ length: WORDS_LENGTH }).fill('_').join(''))
        .map((word, index) => (
          <div key={index} className="flex">
            {word.split('').map((letter, i) => (
              <div key={`${letter}-${i}-${index}`} className="box">
                {letter === '_' ? ' ' : letter}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}
