import React, { MouseEventHandler } from 'react';
import * as styled from './Icon.styled';

interface Props {
    icon?: JSX.Element
    nameApp?: string
    onClick?: MouseEventHandler<HTMLDivElement>
    onDoubleClick?: MouseEventHandler<HTMLDivElement>
}

const Icon: React.FC<Props> = ({ icon, nameApp, onClick, onDoubleClick }) => {
    return (
        <>
            <styled.Container onClick = {onClick} onDoubleClick = {onDoubleClick} >
                <styled.App>{icon}</styled.App>
                <styled.NameApp>{nameApp}</styled.NameApp>
            </styled.Container>
        </>
    )
}

export default Icon;