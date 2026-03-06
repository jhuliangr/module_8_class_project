import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import LeaderboardList from './LeaderboardList';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('LeaderboardList', () => {
  it('renders the Leaderboard title', () => {
    renderWithRouter(<LeaderboardList />);
    expect(screen.getByText('Leaderboard')).toBeInTheDocument();
  });

  it('renders game titles', () => {
    renderWithRouter(<LeaderboardList />);
    expect(screen.getByText('Wordle')).toBeInTheDocument();
    expect(screen.getByText('Tetris')).toBeInTheDocument();
    expect(screen.getByText('Pong')).toBeInTheDocument();
  });

  it('renders top 3 scores for each game', () => {
    renderWithRouter(<LeaderboardList />);

    expect(screen.getByText('Alice: 1000')).toBeInTheDocument();
    expect(screen.getByText('Bob: 950')).toBeInTheDocument();
    expect(screen.getByText('Charlie: 900')).toBeInTheDocument();
  });

  it('renders links to game leaderboards', () => {
    renderWithRouter(<LeaderboardList />);

    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });

  it('renders ordered lists for scores', () => {
    renderWithRouter(<LeaderboardList />);

    const orderedLists = document.querySelectorAll('ol');
    expect(orderedLists.length).toBe(3);
  });
});
