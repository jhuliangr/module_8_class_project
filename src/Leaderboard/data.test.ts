import { describe, it, expect } from 'vitest';
import { getAllGamesWithTopScores, getGameLeaderboard } from './data';

describe('Leaderboard data', () => {
  describe('getAllGamesWithTopScores', () => {
    it('returns all games with their top 3 scores', () => {
      const result = getAllGamesWithTopScores();

      expect(result).toHaveLength(3);
      expect(result[0].gameSlug).toBe('wordle');
      expect(result[0].gameTitle).toBe('Wordle');
      expect(result[0].scores).toHaveLength(3);
    });

    it('includes all game slugs', () => {
      const result = getAllGamesWithTopScores();
      const slugs = result.map((g) => g.gameSlug);

      expect(slugs).toContain('wordle');
      expect(slugs).toContain('tetris');
      expect(slugs).toContain('pong');
    });

    it('limits scores to top 3', () => {
      const result = getAllGamesWithTopScores();

      result.forEach((game) => {
        expect(game.scores.length).toBeLessThanOrEqual(3);
      });
    });
  });

  describe('getGameLeaderboard', () => {
    it('returns leaderboard for valid game slug', () => {
      const result = getGameLeaderboard('wordle');

      expect(result).toBeDefined();
      expect(result?.gameSlug).toBe('wordle');
      expect(result?.gameTitle).toBe('Wordle');
    });

    it('returns top 10 scores for a game', () => {
      const result = getGameLeaderboard('wordle');

      expect(result?.scores).toHaveLength(10);
    });

    it('returns sorted scores by score descending', () => {
      const result = getGameLeaderboard('wordle');

      if (result) {
        for (let i = 0; i < result.scores.length - 1; i++) {
          expect(result.scores[i].score).toBeGreaterThanOrEqual(
            result.scores[i + 1].score,
          );
        }
      }
    });

    it('returns undefined for invalid game slug', () => {
      const result = getGameLeaderboard('invalid-game');

      expect(result).toBeUndefined();
    });

    it('returns undefined for empty string', () => {
      const result = getGameLeaderboard('');

      expect(result).toBeUndefined();
    });

    it('handles tetris game', () => {
      const result = getGameLeaderboard('tetris');

      expect(result).toBeDefined();
      expect(result?.gameTitle).toBe('Tetris');
      expect(result?.scores[0].playerName).toBe('ProGamer');
      expect(result?.scores[0].score).toBe(50000);
    });

    it('handles pong game', () => {
      const result = getGameLeaderboard('pong');

      expect(result).toBeDefined();
      expect(result?.gameTitle).toBe('Pong');
    });
  });
});
