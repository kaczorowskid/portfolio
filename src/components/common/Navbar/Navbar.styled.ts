import { Windows } from '@styled-icons/boxicons-regular';
import { Close } from '@styled-icons/evaicons-solid';
import { WindowMinimize } from '@styled-icons/fa-regular';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 6%;
  background: ${({ theme }) => theme.gray600};
  display: flex;
  justify-content: space-between;
`;

const navbarIconStyle = css`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.gray400};
  margin: 0 15px;
`;

export const Header = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  margin-left: 10px;
`;

export const IconContainer = styled.div`
  height: 100%;
  display: flex;
`;

export const IconWrapper = styled.div<{ closeIcon?: boolean }>`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${props => props.closeIcon ? 'red' : '#5C5C5C'};
  }
`;

export const MinimalizeIcon = styled(WindowMinimize)`
  ${navbarIconStyle};
  padding-bottom: 10px;
`;

export const MaximalizeIcon = styled(Windows)`
  ${navbarIconStyle};
  width: 25px;
  height: 25px;
`;

export const CloseIcon = styled(Close)`${navbarIconStyle};`;