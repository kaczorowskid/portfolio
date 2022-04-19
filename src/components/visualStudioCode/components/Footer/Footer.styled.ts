import styled from 'styled-components';
import { device } from '@utils';

export const Container = styled.div`
  width: 100%;
  height: 4%;
  background: ${({ theme }) => theme.blue700};

  display: grid;
  grid-template-columns: 5% 5% 61% 10% 7% 7% 5%;
  grid-template-rows: 100%;
`;

export const RemoteWindow = styled.div`
  background: ${({ theme }) => theme.green};
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.white};

  @media only screen and (${device.laptop}) {
    display: none;
  }
`;