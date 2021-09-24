import styled from 'styled-components'
import { device } from '../../helper/deviceSize';

export const Container = styled.div`
    width: 100%;
    height: 60vh;
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    background: #212b3c;
    display: grid;
    grid-template-columns: 35% 20% 20% 25%;
    grid-template-rows: 10% 90%;

    @media ${device.desktop} {
        height: 70vh;
    }
`;

export const LeftColumn = styled.div`
    grid-area: 2/2/3/3;
    height: 100%;
`;

export const RightColumn = styled.div`
    grid-area: 2/3/4/4;
    height: 100%;
`;

export const Header = styled.div`
    position: relative;
    top: -10px;
    width: 100%;
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #9d26ff;
`;
export const Title = styled.div<{fontSize?: number}>`
    font-weight: bold;
    width: 100%;
    margin-bottom: 20px;
    font-size: ${props => props.fontSize}px;
    /* color: white; */
`;

export const ULList = styled.ul`
    margin-bottom: 20px;
    margin-left: 40px;
    font-size: 18px;
`;

export const LIList = styled.li`
    margin: 2px 0;
    /* color: white; */
`;