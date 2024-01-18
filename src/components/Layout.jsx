import { Header, Breadcrumbs } from 'components';
import { Outlet, useLocation } from 'react-router-dom';

export const Layout = () => {
  const location = useLocation();

  return (
    <div>
      <Header />
      {location.state && <Breadcrumbs />}
      <Outlet />
    </div>
  );
};
