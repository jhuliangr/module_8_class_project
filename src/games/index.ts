import { type Game } from './types';
import wordle from './Wordle';
export type { Game };

const games: Record<string, Game> = {
  wordle,
};

export default games;
