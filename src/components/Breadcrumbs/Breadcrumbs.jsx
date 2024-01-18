import { Link, useLocation } from 'react-router-dom';

export const Breadcrumbs = () => {
  const location = useLocation();

  return (
    <section>
      <ul>
        <li>
          <Link to={location.state?.from}>Go back</Link>
        </li>
      </ul>
    </section>
  );
};
