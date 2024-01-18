import styled from 'styled-components';

export const StyledLoaderBackdrop = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledLoaderBackdropContent = styled.div`
  position: relative;
  padding: 20px;
  overflow: hidden;
  max-width: 1000px;
  border-radius: 5px;

  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid #fff;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    position: relative;
    animation: pulse 1s linear infinite;
  }
  .loader:after {
    content: '';
    position: absolute;
    width: 48px;
    height: 48px;
    border: 5px solid #fff;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: scaleUp 1s linear infinite;
  }

  @keyframes scaleUp {
    0% {
      transform: translate(-50%, -50%) scale(0);
    }
    60%,
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }
  @keyframes pulse {
    0%,
    60%,
    100% {
      transform: scale(1);
    }
    80% {
      transform: scale(1.2);
    }
  }
`;
