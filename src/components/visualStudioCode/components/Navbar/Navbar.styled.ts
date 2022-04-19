import { Windows } from '@styled-icons/boxicons-regular';
import { Close } from '@styled-icons/evaicons-solid';
import { WindowMinimize } from '@styled-icons/fa-regular';
import styled, { css } from 'styled-components';
import { device } from '@utils';

export const ContainerNavbar = styled.div`
  width: 100%;
  height: 6%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100%;
  background: ${({ theme }) => theme.graphite800};

  @media only screen and (${device.laptop}) {
    display: flex;
  }
`;

export const NavbarItemContainer = styled.div`
  display: flex;

  @media only screen and (${device.laptop}) {
    display: none;
  }

`;

export const NavbarItem = styled.div`
  height: 100%;
  padding: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.gray400};
  font-size: 20px;
  cursor: default;

  &:hover {
    background: ${({ theme }) => theme.gray550};
  }
`;

export const OpenFileNavbarName = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.gray400};
  font-size: 20px;
  cursor: default;
`;

export const IconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const IconWrapper = styled.div<{ closeIcon?: boolean }>`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  &:hover {
    background: ${props => props.closeIcon ? 'red' : '#474748'}
  }
`;

const iconStyle = css`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.gray400};
  margin: 0 15px;
`

export const MinimalizeIcon = styled(WindowMinimize)`
  ${iconStyle};
  padding-bottom: 10px;
`;

export const MaximalizeIcon = styled(Windows)`
  ${iconStyle};
  width: 25px;
  height: 25px;
`;

export const CloseIcon = styled(Close)`${iconStyle};`;