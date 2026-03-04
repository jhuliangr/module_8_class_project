import { lazy } from 'react';
import type { Game } from '../types';

const game: Game = {
  title: 'Wordle',
  Play: lazy(() => import('./Wordle')),
};

export default game;
