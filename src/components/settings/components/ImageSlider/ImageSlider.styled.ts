import styled from 'styled-components';
import { device } from '@utils';

export const Container = styled.div`
  width: 100%;
  height: 44%;
  overflow-x: auto;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImagesCheckContainer = styled.div`
  width: 200%;
  height: 90%;
  display: flex;

  @media only screen and (${device.laptop}) {
    width: 300%;
  }
`;

export const CheckImageWrapper = styled.div<{ checkImage?: number }>`
  width: 15%;
  height: 100%;
  margin: 0 10px;

  &:nth-child(${props => props.checkImage}) {
    border: 3px solid ${({ theme }) => theme.white};
  }
`;