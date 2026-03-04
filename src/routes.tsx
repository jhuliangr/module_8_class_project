import { Routes, Route } from 'react-router';
import AppLayout from './AppLayout';
import Play from './Play';
export function AppRoutes() {
  return (
    <Routes>
      <Route Component={AppLayout}>
        <Route path="/play/:slug" Component={Play} />
      </Route>
    </Routes>
  );
}
