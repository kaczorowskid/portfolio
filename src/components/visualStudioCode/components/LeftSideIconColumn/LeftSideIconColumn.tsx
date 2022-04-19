import React from 'react';
import {
  Container,
  ExplorerIcon,
  GitIcon,
  ExtensionIcon
} from './LeftSideIconColumn.styled';

const LeftSideIconColumn: React.FC = () => {
  return (
    <Container>
      <ExplorerIcon checked={true} />
      <GitIcon />
      <ExtensionIcon />
    </Container>
  )
}
export default LeftSideIconColumn;