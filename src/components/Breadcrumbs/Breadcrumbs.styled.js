import styled from 'styled-components';

export const StyledBreadcrumbsSection = styled.section`
  position: absolute;
  top: 100px;
  z-index: 10;

  ul li a {
    display: flex;
    gap: 0;
    align-items: center;
    color: white;
    font-weight: 500;
    text-decoration: none;

    &:hover {
      color: white;
      text-decoration: underline;
    }
  }
`;
