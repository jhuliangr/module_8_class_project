import { ROWS, WORDS_LENGTH } from './constants';
import type { GuessGrid } from './types';

export const initState = (): GuessGrid =>
  Array.from({ length: ROWS }).map(() =>
    Array.from({ length: WORDS_LENGTH }).map(() => ({
      letter: '',
      state: 'none',
    })),
  );
