import styled, { keyframes } from 'styled-components';

const changeBgColor = keyframes`
  0% {
      background-color: #a248aa;
    }

    50% {
      background-color: #682b5b;
    }

    100% {
      background-color: #2c0329;
    }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  margin-bottom: 10px;
  width: 200px;

  border: 1px solid grey;
  box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
  transition: transform 250ms linear;

  :hover {
    cursor: pointer;
    animation: 1s ${changeBgColor} ease-out;
    transform: scale(1.1);
  }
`;

export const Status = styled.span`
  font-size: 40px;
  width: 25px;
  height: 25px;
  background-color: ${({ status }) => (status ? 'green' : 'red')};
  border-radius: 50%;
`;
