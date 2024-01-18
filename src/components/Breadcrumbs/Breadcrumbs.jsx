import { Link, useLocation } from 'react-router-dom';
import { MdOutlineArrowLeft } from 'react-icons/md';
import { StyledList, StyledSection } from 'styles/Shared';
import { StyledBreadcrumbsSection } from './Breadcrumbs.styled';

export const Breadcrumbs = () => {
  const location = useLocation();

  return (
    <StyledBreadcrumbsSection>
      <StyledSection>
        <StyledList>
          <li>
            <Link to={location.state?.from}>
              <MdOutlineArrowLeft size={30} />
              Go back
            </Link>
          </li>
        </StyledList>
      </StyledSection>
    </StyledBreadcrumbsSection>
  );
};
