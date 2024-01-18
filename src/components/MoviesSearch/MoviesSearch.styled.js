import styled from 'styled-components';

export const StyledSearchFormContainer = styled.div`
  display: flex;
  justify-content: center;

  form {
    display: flex;
    align-items: center;
  }

  form input {
    height: 26px;
    font-size: 16px;
    padding: 2px 10px;

    border: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    &:focus {
      outline: none;
    }
  }

  form button {
    background-color: rgb(147, 82, 179);
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    color: white;
    padding: 5px 10px;
    font-size: 18px;
    font-weight: 500;

    cursor: pointer;
    transition: background-color 0.5s ease-out;

    &:hover {
      background-color: #a45bc7;
    }
  }
`;
