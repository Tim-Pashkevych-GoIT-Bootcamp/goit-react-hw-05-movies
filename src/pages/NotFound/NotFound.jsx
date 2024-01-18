import { Link } from 'react-router-dom';
import { StyledSection } from 'styles/Shared';

const NotFound = () => {
  return (
    <StyledSection>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        The Page you are looking for doesn't exist or an other error occured. Go
        to <Link to="/">Home page.</Link>
      </p>
    </StyledSection>
  );
};

export default NotFound;
