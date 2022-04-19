import React from 'react';
import {
  Container,
  RemoteWindow,
  Item
} from './Footer.styled';

const Footer: React.FC = () => {
  return (
    <Container>
      <RemoteWindow />
      <Item>main</Item>
      <Item></Item>
      <Item>Spaces: 4</Item>
      <Item>UTF-8</Item>
      <Item>CLRF</Item>
      <Item>TS</Item>
    </Container>
  )
}

export default Footer;