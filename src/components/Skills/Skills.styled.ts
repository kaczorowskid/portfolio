import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    /* min-height: 65vh;
    height: 70vh;
    max-height: 80vh; */
    height: 65vh;
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    background: #a0c5ff;
    display: grid;
    grid-template-columns: 35% 20% 20% 25%;
    grid-template-rows: 10% 90%;
`;

export const LeftColumn = styled.div`
    grid-area: 2/2/3/3;
`;

export const RightColumn = styled.div`
    grid-area: 2/3/4/4;
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
`;

export const ULList = styled.ul`
    margin-bottom: 20px;
    margin-left: 40px;
    font-size: 18px;
`;

export const LIList = styled.li`
    margin: 2px 0;
`;