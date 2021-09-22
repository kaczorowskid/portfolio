import React from 'react';
import Slider from '../Slider/Slider';
import * as styled from './Projects.styled'
import { IData } from '../../mock/dataProjects/dataProjects' 

interface Props {
    data: Array<IData>
}

const Projects: React.FC<Props> = ({data}) => {
    return (
        <>
        <styled.Container>
            <styled.Header>My projects</styled.Header>
            <Slider data = {data}/>
        </styled.Container>
        </>
    )
}

export default Projects;