import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Routes, Route, MemoryRouter } from 'react-router';
import LeaderboardDetail from './LeaderboardDetail';

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <MemoryRouter initialEntries={['/leaderboard/wordle']}>
      <Routes>
        <Route path="/leaderboard/:slug" element={component} />
      </Routes>
    </MemoryRouter>,
  );
};

describe('LeaderboardDetail', () => {
  it('renders the Wordle leaderboard title', () => {
    renderWithRouter(<LeaderboardDetail />);
    expect(screen.getByText('Wordle Leaderboard')).toBeInTheDocument();
  });

  it('renders scores for the game', () => {
    renderWithRouter(<LeaderboardDetail />);

    expect(screen.getByText('Alice: 1000')).toBeInTheDocument();
  });

  it('renders a back link', () => {
    renderWithRouter(<LeaderboardDetail />);

    const links = screen.getAllByRole('link');
    expect(
      links.some((link) => link.textContent === 'Back to all leaderboards'),
    ).toBe(true);
  });

  it('renders up to 10 scores', () => {
    renderWithRouter(<LeaderboardDetail />);

    const listItems = document.querySelectorAll('ol li');
    expect(listItems.length).toBe(10);
  });
});
