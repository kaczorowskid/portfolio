import React from 'react';
import * as styled from './Navbar.styled'

interface Props {
    appName: string
    setDisplayTerminal: (val: boolean) => void
}

const Navbar: React.FC<Props> = ({appName, setDisplayTerminal}) => {
    return (
        <styled.Container>
            <styled.Header>
                <div style={{ color: 'white' }} >{appName}</div>
            </styled.Header>
            <styled.IconContainer>
                <styled.IconWrapper>
                    <styled.MinimalizeIcon />
                </styled.IconWrapper>
                <styled.IconWrapper>
                    <styled.MaximalizeIcon />
                </styled.IconWrapper>
                <styled.IconWrapper onClick={() => setDisplayTerminal(false)} closeIcon={true} >
                    <styled.CloseIcon />
                </styled.IconWrapper>
            </styled.IconContainer>
        </styled.Container>
    )
}

export default Navbar;