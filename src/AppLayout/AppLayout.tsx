import { Outlet } from 'react-router';

const AppLayout: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
