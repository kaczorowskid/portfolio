import React, { useRef, useEffect, useState, Dispatch, SetStateAction } from 'react';
import * as styled from '../style';
import { tab } from '../helper/tab';
import { projects } from '../config';
import { useClientHeight } from '../../../../hooks/useClientHeight';


const Projects: React.FC = () => {
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
        setClientHeight(containerRef.current?.clientHeight);
    }, []);


    return (
        <>
            <styled.Container ref = {containerRef} >
                <styled.Line >
                    <styled.Const>const </styled.Const> <styled.ObjectName>Projects: <styled.Type>Iprojects</styled.Type> </styled.ObjectName>{'= {'}
                </styled.Line>
                {Object.entries(projects).map(([key, value], i) => (
                    <div key={i}>
                        <styled.Line>
                            {tab(1)}<styled.ObjectKey>{key}: </styled.ObjectKey>{'{'}
                        </styled.Line>
                        <styled.Line>
                            {tab(2)}<styled.ObjectKey>description: </styled.ObjectKey>{'['}
                        </styled.Line>
                        <styled.Line>
                            {tab(3)}<styled.String>'{value.description}'</styled.String>
                        </styled.Line>
                        <styled.Line>
                            {tab(2)}{'],'}
                        </styled.Line>
                        <styled.Line>
                            {tab(2)}<styled.ObjectKey>image: </styled.ObjectKey>{'{'}
                        </styled.Line>
                        <styled.PortfolioImageContainer>
                            {tab(3)}
                            <styled.PortfolioImageWrapper onMouseEnter={() => setTouchIdx(i)} onMouseLeave={() => setTouchIdx(10)} >
                                <styled.PortfolioImage src={value.image} />
                                <styled.ButtonContainer ref={divRef => buttonContainerRef.current[i] = divRef}>
                                    <styled.Button onClick={() => console.log(value.githubLink)} >GITHUB</styled.Button>
                                    <styled.Button onClick={() => console.log(value.liveLink)} >LIVE</styled.Button>
                                </styled.ButtonContainer>
                            </styled.PortfolioImageWrapper>
                        </styled.PortfolioImageContainer>
                        <styled.Line>
                            {tab(2)}{'},'}
                        </styled.Line>
                        <styled.Line>
                            {tab(1)}{'},'}
                        </styled.Line>
                    </div>
                ))}
                <styled.Line>
                    {'}'}
                </styled.Line>
            </styled.Container>
        </>
    )
}

export default Projects;