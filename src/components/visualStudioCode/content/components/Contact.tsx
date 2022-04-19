import React, { useEffect, useRef } from 'react';
import {
  Container,
  Line,
  Const,
  ObjectName,
  ObjectKey,
  Type,
  String
} from './style';
import { tab } from '@utils';
import { useClientHeight } from '@hooks';

interface Props {
  contact: { [k: string]: string };
}

const Contact: React.FC<Props> = ({ contact }) => {

  const containerRef = useRef<HTMLDivElement>(null);
  const { setClientHeight } = useClientHeight();

  useEffect(() => {
    if (containerRef.current) {
      setClientHeight(containerRef.current?.clientHeight)
    }
  }, []);


  return (
    <Container ref={containerRef} >
      <Line>
        <Const>const </Const>
        <ObjectName>contact: <Type>Icontact</Type> </ObjectName>{'= {'}
      </Line>
      {Object.entries(contact).map(([key, value], i) => (
        <Line key={i}>
          {tab(1)}<ObjectKey>{key}: </ObjectKey>
          <String>'{value}'<span style={{ color: 'white' }} >,</span></String>
        </Line>
      ))}
      <Line>
        {'}'}
      </Line>
    </Container>
  )
}

export default Contact;