import { StyledMovieDetailsAddInformationSection } from 'components/MovieItemDetails/MovieItemDetails.styled';
import { NavLink } from 'react-router-dom';
import { StyledList } from 'styles/Shared';

export const MovieItemDetailsAdditional = ({ location }) => {
  return (
    <StyledMovieDetailsAddInformationSection>
      <h2>Additional information</h2>
      <StyledList className="addMenuList">
        <li>
          <NavLink to="cast" state={{ from: location.state?.from }}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" state={{ from: location.state?.from }}>
            Reviews
          </NavLink>
        </li>
      </StyledList>
    </StyledMovieDetailsAddInformationSection>
  );
};
