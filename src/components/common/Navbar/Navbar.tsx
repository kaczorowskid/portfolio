import React from 'react';
import {
  Container,
  Header,
  IconContainer,
  IconWrapper,
  MinimalizeIcon,
  MaximalizeIcon,
  CloseIcon
} from './Navbar.styled';

interface Props {
  appName: string;
  setDisplay: (val: boolean) => void;
}

const Navbar: React.FC<Props> = ({ appName, setDisplay }) => {
  return (
    <Container>
      <Header>
        <div style={{ color: 'white' }} >{appName}</div>
      </Header>
      <IconContainer>
        <IconWrapper>
          <MinimalizeIcon />
        </IconWrapper>
        <IconWrapper>
          <MaximalizeIcon />
        </IconWrapper>
        <IconWrapper onClick={() => setDisplay(false)} closeIcon={true} >
          <CloseIcon />
        </IconWrapper>
      </IconContainer>
    </Container>
  )
}

export default Navbar;