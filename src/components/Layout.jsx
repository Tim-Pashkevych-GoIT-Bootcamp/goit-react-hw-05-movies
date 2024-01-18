import { Header, Breadcrumbs, Loader } from 'components';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

export const Layout = () => {
  const location = useLocation();

  return (
    <div>
      <Header />
      {location.state && <Breadcrumbs />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
