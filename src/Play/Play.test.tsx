import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { Routes, Route, MemoryRouter } from 'react-router';
import { Suspense } from 'react';
import Play from './Play';

const renderWithRouter = (initialEntry: string = '/play/wordle') => {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <Routes>
        <Route
          path="/play/:slug"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Play />
            </Suspense>
          }
        />
      </Routes>
    </MemoryRouter>,
  );
};

describe('Play', () => {
  it('shows error for invalid game slug', async () => {
    renderWithRouter('/play/invalid-game');
    await waitFor(() => {
      expect(screen.getByText('Error')).toBeInTheDocument();
    });
    expect(
      screen.getByText(/Cannot find game invalid-game/),
    ).toBeInTheDocument();
  });

  it('renders home link for invalid game', async () => {
    renderWithRouter('/play/invalid-game');
    await waitFor(() => {
      expect(screen.getByText('Go Home')).toBeInTheDocument();
    });
  });
});
