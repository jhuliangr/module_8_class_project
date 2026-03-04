import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import { BrowserRouter } from 'react-router';
import { AppRoutes } from './routes.tsx';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Failed to find the root element');
}

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
);
