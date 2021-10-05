import styled from 'styled-components';
import { device } from '../../helper/deviceSize';

export const Wrapper = styled.div`
    width: 50vw;
    height: 60vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'IBM Plex Sans Arabic', sans-serif;

    @media only screen and (${device.laptop}) {
        width: 95%;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background: #010101;
`;

export const PreviewImageContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ImageContainer = styled.div`
    width: 50%;
    height: 90%;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;