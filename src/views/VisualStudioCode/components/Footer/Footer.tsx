import React from 'react';
import * as styled from './Footer.styled';

const Footer: React.FC = () => {
    return (
        <styled.Container>
            <styled.RemoteWindow />
            <styled.Item>main</styled.Item>
            <styled.Item></styled.Item>
            <styled.Item>Spaces: 4</styled.Item>
            <styled.Item>UTF-8</styled.Item>
            <styled.Item>CLRF</styled.Item>
            <styled.Item>TS</styled.Item>
        </styled.Container>
    )
}

export default Footer;