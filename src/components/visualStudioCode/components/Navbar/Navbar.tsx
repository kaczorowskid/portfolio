import React from 'react';
import {
  ContainerNavbar,
  NavbarItemContainer,
  NavbarItem,
  OpenFileNavbarName,
  IconContainer,
  IconWrapper,
  MinimalizeIcon,
  MaximalizeIcon,
  CloseIcon
} from './Navbar.styled';

interface Props {
  openFileTitle?: string;
  setDisplayVSC: (val: boolean) => void;
}

const Navbar: React.FC<Props> = ({ openFileTitle, setDisplayVSC }) => {
  return (
    <ContainerNavbar>
      <NavbarItemContainer>
        <NavbarItem>File</NavbarItem>
        <NavbarItem>Edit</NavbarItem>
        <NavbarItem>Selection</NavbarItem>
        <NavbarItem>View</NavbarItem>
        <NavbarItem>Go</NavbarItem>
        <NavbarItem>Run</NavbarItem>
        <NavbarItem>Terminal</NavbarItem>
        <NavbarItem>Help</NavbarItem>
      </NavbarItemContainer>
      <OpenFileNavbarName >{openFileTitle}</OpenFileNavbarName>
      <IconContainer>
        <IconWrapper>
          <MinimalizeIcon />
        </IconWrapper>
        <IconWrapper>
          <MaximalizeIcon />
        </IconWrapper>
        <IconWrapper onClick={() => setDisplayVSC(false)} closeIcon={true} >
          <CloseIcon />
        </IconWrapper>
      </IconContainer>
    </ContainerNavbar>
  )
}

export default Navbar;