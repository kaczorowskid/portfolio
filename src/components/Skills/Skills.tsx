import React from 'react';
import * as styled from './Skills.styled'

const Skills: React.FC = () => {
    return (
        <>
            <styled.Container>
                <styled.LeftColumn>
                    <styled.Header>My skills</styled.Header>
                    <styled.Title fontSize={18} >Frontend</styled.Title>
                    <styled.ULList>
                        <styled.LIList>JavaScript</styled.LIList>
                        <styled.LIList>React</styled.LIList>
                        <styled.LIList>Redux</styled.LIList>
                        <styled.LIList>Hooks</styled.LIList>
                        <styled.LIList>HTML</styled.LIList>
                        <styled.LIList>CSS</styled.LIList>
                        <styled.LIList>material-ui</styled.LIList>
                        <styled.LIList>styled-components</styled.LIList>
                    </styled.ULList>
                    <styled.Title fontSize={18} >Other</styled.Title>
                    <styled.ULList>
                        <styled.LIList>Windows</styled.LIList>
                        <styled.LIList>Graphic design tools (Figma, Illustrator)</styled.LIList>
                        <styled.LIList>GIT</styled.LIList>
                        <styled.LIList>JetBrains IDE</styled.LIList>
                        <styled.LIList>Visual Studio Code IDE</styled.LIList>
                    </styled.ULList>
                </styled.LeftColumn>
                <styled.RightColumn>
                    <styled.Title fontSize={24} >Backend</styled.Title>
                    <styled.ULList>
                        <styled.LIList>node.js</styled.LIList>
                        <styled.LIList>express.js </styled.LIList>
                        <styled.LIList>REST</styled.LIList>
                        <styled.LIList>ORM (Sequelize)</styled.LIList>
                        <styled.LIList>NoSQL (Mongo)</styled.LIList>
                        <styled.LIList>Bash scripts</styled.LIList>
                    </styled.ULList>
                </styled.RightColumn>
            </styled.Container>
        </>
    )
}

export default Skills;