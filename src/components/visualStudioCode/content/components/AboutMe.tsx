import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Container,
  Line,
  Const,
  ObjectName,
  Type,
  ObjectKey,
  String,
  ImageContainer,
  AvatarContainer
} from './style';
import { face } from '@assets';
import { avatarVariants } from '@animations';
import { tab } from '@utils';
import { useClientHeight } from '@hooks';

interface Props {
  skills: { [s: string]: string[] };
}

const AboutMe: React.FC<Props> = ({ skills }) => {

  const { frontend, backend, other } = skills;

  const { setClientHeight } = useClientHeight();

  const containerRef = useRef<HTMLDivElement>(null)

  const enterSkills = (dataSkill: Array<string>): Array<JSX.Element> => {
    return (
      dataSkill.map((skill, i) => (
        <Line key={i}>
          {tab(3)} <String>'{skill}'</String>,
        </Line>
      ))
    )
  }

  useEffect(() => {
    if (containerRef.current) {
      setClientHeight(containerRef.current?.clientHeight)
    }
  }, [])

  return (
    <Container ref={containerRef} >
      <Line>
        <Const>const </Const>
        <ObjectName>aboutMe: <Type >IaboutMeData</Type> </ObjectName>{`= {`}
      </Line>
      <Line>
        {tab(1)}
        <ObjectKey>name: </ObjectKey>
        <String>'Damian'</String>,
      </Line>
      <Line>
        {tab(1)} <ObjectKey>image: </ObjectKey>{'{'}
      </Line>
      <ImageContainer>
        <AvatarContainer>
          <motion.img
            {...avatarVariants}
            initial='hiddden'
            animate="visible"
            style={{ width: '100%', height: '100%' }} src={face} alt="" />
        </AvatarContainer>
      </ImageContainer>
      <Line>
        {tab(1)}{'},'}
      </Line>
      <Line>
        {tab(1)} <ObjectKey >aboutMe: </ObjectKey>{'['}
      </Line>
      <Line>
        {tab(2)} <String >'Hello 👋 I'm Damian, a aspiring frontend developer 👨🏽‍💻' </String>
      </Line>
      <Line>
        {tab(1)}{'],'}
      </Line>
      <Line>
        {tab(1)} <ObjectKey >mySkills: </ObjectKey>{'{'}
      </Line>
      <Line>
        {tab(2)} <ObjectKey>Frontend: </ObjectKey>{'['}
      </Line>
      {enterSkills(frontend)}
      <Line>
        {tab(2)}{'],'}
      </Line>
      <Line>
        {tab(2)} <ObjectKey>Backend: </ObjectKey>{'['}
      </Line>
      {enterSkills(backend)}
      <Line>
        {tab(2)}{'],'}
      </Line>
      <Line>
        {tab(2)} <ObjectKey>Other: </ObjectKey>{'['}
      </Line>
      {enterSkills(other)}
      <Line>
        {tab(2)}{'],'}
      </Line>
      <Line>
        {tab(1)}{'},'}
      </Line>
      <Line>
        {'}'}
      </Line>
    </Container>
  )
}

export default AboutMe;