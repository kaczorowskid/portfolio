import { BorderAll, GitBranch } from '@styled-icons/boxicons-regular';
import { Documents } from '@styled-icons/ionicons-outline';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 25%;
  height: 100%;
  background: ${({ theme }) => theme.gray600};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const leftSideIconStyle = css`
  color: ${({ theme }) => theme.gray500};
  width: 50px;
  margin: 15px 0;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.white};
  }
`;

export const ExplorerIcon = styled(Documents) <{ checked?: boolean }>`
  ${leftSideIconStyle};
  color: ${props => props.checked ? 'white' : '#858585'};
`;
export const GitIcon = styled(GitBranch)`${leftSideIconStyle};`;
export const ExtensionIcon = styled(BorderAll)`${leftSideIconStyle};`;