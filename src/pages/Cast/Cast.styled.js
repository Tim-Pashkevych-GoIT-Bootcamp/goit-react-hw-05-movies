import styled from 'styled-components';

export const StyledCastList = styled.ul`
  display: flex;
  gap: 30px 10px;
  flex-wrap: wrap;

  padding: 0;
  margin: 0;
  list-style: none;

  li {
    width: calc((100% - 60px) / 4);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    img {
      margin-bottom: 10px;
    }

    p {
      text-align: center;
      padding: 0;
      margin: 0;
    }
  }
`;
