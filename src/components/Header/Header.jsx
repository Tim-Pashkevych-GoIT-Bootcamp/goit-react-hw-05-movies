import { NavLink } from 'react-router-dom';
import { StyledHeader } from './Header.styled';
import { StyledList } from 'styles/Shared';

export const Header = () => {
  return (
    <StyledHeader>
      <StyledList>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </StyledList>
    </StyledHeader>
  );
};
