import React, { MouseEventHandler } from 'react';
import {
  Container,
  App,
  NameApp
} from './Icon.styled';

interface Props {
  icon: JSX.Element;
  nameApp: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onDoubleClick?: MouseEventHandler<HTMLDivElement>;
}

const Icon: React.FC<Props> = ({ icon, nameApp, onClick, onDoubleClick }) => {
  return (
    <Container onClick={onClick} onDoubleClick={onDoubleClick} >
      <App>{icon}</App>
      <NameApp>{nameApp}</NameApp>
    </Container>
  )
}

export default Icon;