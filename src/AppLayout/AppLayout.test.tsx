import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import AppLayout from './AppLayout';

vi.mock('react-router', () => ({
  Link: ({
    to,
    children,
    className,
  }: {
    to: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <a href={to} className={className}>
      {children}
    </a>
  ),
  Outlet: () => <div>Outlet Content</div>,
}));

describe('AppLayout', () => {
  it('works', () => {
    render(<AppLayout />);
  });

  it('renders the correct title', () => {
    render(<AppLayout />);
    expect(screen.getByText('Leaderboard')).toBeInTheDocument();
  });
});
