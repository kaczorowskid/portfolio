import { Markdown, ReactLogo } from '@styled-icons/boxicons-logos';
import { Folder, FolderOpen } from '@styled-icons/fa-regular';
import { Typescript } from '@styled-icons/simple-icons';
import styled, { css } from 'styled-components';
import { device } from '@utils';

export const Container = styled.div`
  width: 80%;
  height: 100%;
  background: ${({ theme }) => theme.graphite500};
`;

export const FolderWrapper = styled.div<{ small?: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px ${props => props.small ? '15px' : '45px'} ;
  cursor: pointer;

  &:hover{
    background: ${({ theme }) => theme.graphite600};
  }
`;

const logoIconStyle = css`
  color: ${({ theme }) => theme.blue300};
  width: 30px;
  height: 30px;

  @media only screen and (${device.laptop}) {
    width: 15px;
    height: 15px;
  }
`;

export const FolderOpenIcon = styled(FolderOpen)`${logoIconStyle}`;
export const FolderCloseIcon = styled(Folder)`${logoIconStyle}`;
export const MarkdownIcon = styled(Markdown)`${logoIconStyle}`;
export const TSXIcon = styled(ReactLogo)`${logoIconStyle}`;
export const TSIcon = styled(Typescript)`
  ${logoIconStyle};
  color: ${({ theme }) => theme.blue300};
  width: 25px;
  margin: 0 3px;
`;

export const FolderName = styled.span`
  color: ${({ theme }) => theme.red100};
  margin-left: 10px;
  font-size: 17px;
`;