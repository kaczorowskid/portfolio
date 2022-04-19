import React, { useRef, useEffect, useState } from 'react';
import {
  Container,
  Line,
  Const,
  ObjectName,
  ObjectKey,
  Type,
  String,
  PortfolioImageContainer,
  PortfolioImageWrapper,
  PortfolioImage,
  ButtonContainer,
  Button
} from './style';
import { tab } from '@utils';
import { useClientHeight } from '@hooks';
import { IprojectData } from '@types';

interface Props {
  projects: { [k: string]: IprojectData };
}

const Projects: React.FC<Props> = ({ projects }) => {
  const [touchIdx, setTouchIdx] = useState<number>(10);

  const buttonContainerRef = useRef<Array<HTMLDivElement | null>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const { setClientHeight } = useClientHeight();

  useEffect(() => {
    buttonContainerRef.current.forEach((div, i) => {
      if (div !== null) {
        (touchIdx === i) ? div.style.display = "flex" : div.style.display = "none"
      }
    })
  }, [touchIdx]);

  useEffect(() => {
    if (containerRef.current) {
      setClientHeight(containerRef.current?.clientHeight)
    }
  }, []);


  return (
    <Container ref={containerRef} >
      <Line >
        <Const>const </Const> <ObjectName>projects: <Type>Iprojects</Type> </ObjectName>{'= {'}
      </Line>
      {Object.entries(projects).map(([key, value], i) => (
        <div key={i}>
          <Line>
            {tab(1)}<ObjectKey>{key}: </ObjectKey>{'{'}
          </Line>
          <Line>
            {tab(2)}<ObjectKey>description: </ObjectKey>{'['}
          </Line>
          <Line>
            {tab(3)}<String>'{value.description}'</String>
          </Line>
          <Line>
            {tab(2)}{'],'}
          </Line>
          <Line>
            {tab(2)}<ObjectKey>image: </ObjectKey>{'{'}
          </Line>
          <PortfolioImageContainer>
            {tab(3)}
            <PortfolioImageWrapper onMouseEnter={() => setTouchIdx(i)} onMouseLeave={() => setTouchIdx(10)} >
              <PortfolioImage src={value.image} />
              <ButtonContainer ref={divRef => buttonContainerRef.current[i] = divRef}>
                <Button onClick={() => console.log(value.githubLink)} >GITHUB</Button>
                <Button onClick={() => console.log(value.liveLink)} >LIVE</Button>
              </ButtonContainer>
            </PortfolioImageWrapper>
          </PortfolioImageContainer>
          <Line>
            {tab(2)}{'},'}
          </Line>
          <Line>
            {tab(1)}{'},'}
          </Line>
        </div>
      ))}
      <Line>
        {'}'}
      </Line>
    </Container>
  )
}

export default Projects;