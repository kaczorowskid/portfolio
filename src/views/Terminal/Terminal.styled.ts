import styled from 'styled-components'
import { device } from '@utils';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'IBM Plex Sans Arabic', sans-serif;
  width: 50vw;
  height: 60vh;

  @media only screen and (${device.laptop}) {
    width: 95%;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.black700};
  border-radius: 2px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.black800};
  box-shadow: 0px 0px 15px ${({ theme }) => theme.black800};
`;

export const OutputContainer = styled.div`
  width: 100%;
  padding-left: 15px;
  margin-bottom: 10px;
  height: 80%;
  color: ${({ theme }) => theme.white};
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Output = styled.div`
  font-size: 20px;
`;

export const Tilde = styled.div`
  color: ${({ theme }) => theme.green};
  padding-left: 15px;
`;

export const InputContainer = styled.div`
  display: flex;
  height: auto;
  align-items: center;
  font-size: 20px;
`;

export const Prompt = styled.div`
  height: 30px;
  color: ${({ theme }) => theme.green};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 5px;
`;

export const Cursor = styled.div<{ blink?: boolean }>`
  width: 2px;
  height: 25px;
  background: ${({ theme }) => theme.white};
  display: ${props => props.blink ? 'block' : 'none'};
`;

export const InputElement = styled.input`
  width: 0;
  padding: 0;
  border: none;
  background: none;
  z-index: -1;
`;

export const Input = styled.div`
  height: 30px;
  color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
`;

export const ActualPath = styled.span`
  color: ${({ theme }) => theme.blue500};
`;