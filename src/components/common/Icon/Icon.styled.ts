import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 100px;
  margin: 10px;
  font-family: 'IBM Plex Sans Arabic', sans-serif;
  cursor: default;

  &:hover {
      border: 1px solid white;
      background: ${({ theme }) => theme.gray700};
  }
`;

export const App = styled.div`
  width: 60px;
  color: ${({ theme }) => theme.white};
`;

export const NameApp = styled.div`
  color: ${({ theme }) => theme.white};
  margin-top: 10px;
`;