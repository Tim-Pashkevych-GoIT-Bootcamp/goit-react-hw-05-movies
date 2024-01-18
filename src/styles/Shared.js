import styled from 'styled-components';
import headerBgImg from '../images/header-bg.jpg';

export const StyledHeaderSection = styled.section`
  width: 100vw;
  background-image: url(${headerBgImg});
  position: relative;
  padding: 50px 0;
  margin-bottom: 20px;

  &::before {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #742a74;
    opacity: 0.7;
  }

  section {
    position: relative;
    z-index: 10;

    color: white;
  }
`;
export const StyledSection = styled.section`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 100px;

  a {
    text-decoration: none;
    color: rgb(33, 37, 41);

    &:hover {
      color: black;
      text-decoration: underline;
    }
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 5px 0;
  }

  a.active {
    color: black;
    font-weight: 700;
    text-decoration: underline;
  }
`;
