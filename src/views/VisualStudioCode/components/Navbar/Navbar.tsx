import React from 'react';
import * as styled from './Navbar.styled'

interface Props {
    openFileTitle?: string
    setDisplayVSC: (val: boolean) => void
}

const Navbar: React.FC<Props> = ({openFileTitle, setDisplayVSC}) => {
    return (
        <>

            <styled.ContainerNavbar>
                <styled.NavbarItemContainer>
                    <styled.NavbarItem>File</styled.NavbarItem>
                    <styled.NavbarItem>Edit</styled.NavbarItem>
                    <styled.NavbarItem>Selection</styled.NavbarItem>
                    <styled.NavbarItem>View</styled.NavbarItem>
                    <styled.NavbarItem>Go</styled.NavbarItem>
                    <styled.NavbarItem>Run</styled.NavbarItem>
                    <styled.NavbarItem>Terminal</styled.NavbarItem>
                    <styled.NavbarItem>Help</styled.NavbarItem>
                </styled.NavbarItemContainer>
                <styled.OpenFileNavbarName >{openFileTitle}</styled.OpenFileNavbarName>
                <styled.IconContainer>
                    <styled.IconWrapper>
                        <styled.MinimalizeIcon />
                    </styled.IconWrapper>
                    <styled.IconWrapper>
                        <styled.MaximalizeIcon />
                    </styled.IconWrapper>
                    <styled.IconWrapper onClick={() => setDisplayVSC(false)} closeIcon={true} >
                        <styled.CloseIcon />
                    </styled.IconWrapper>
                </styled.IconContainer>
            </styled.ContainerNavbar>
        </>
    )
}

export default Navbar;