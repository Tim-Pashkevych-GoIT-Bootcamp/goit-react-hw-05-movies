import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 20px;

  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: rgb(33, 37, 41);
    transition-property: text-decoration, color;
    transition-duration: 2s;
    transition-timing-function: ease-in;

    &:hover {
      text-decoration: underline;
      color: black;
    }
  }
`;
