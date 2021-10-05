import styled from 'styled-components';
import { device } from '../../helper/deviceSize'

export const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 90vh;
    z-index: 5;

    @media only screen and (${device.laptop}) {
        width: 95%;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    border-radius: 5px;
    overflow: hidden;
`;

export const Window = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
`;

export const LeftColumn = styled.div`
    height: 100%;
    width: 20%;
    display: flex;

    @media only screen and (${device.laptop}) {
       display: none;
    }
`;

export const EditorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;

    @media only screen and (${device.laptop}) {
        width: 100%;
        overflow: scroll;
    }
`;

export const Editor = styled.div`
    height: 100%;
    width: 200%;
    background: #1E1E1E;
    display: grid;
    grid-template-columns: 5% 95%;
    grid-template-rows: 100%;
    overflow-y: scroll;
`;

export const NumberLinesContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const Number = styled.div`
    width: 100%;
    height: 40px;
    color: #858585;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    color: white;
`;
