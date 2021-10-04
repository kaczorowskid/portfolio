import styled, { css } from 'styled-components';
import { WindowMinimize } from '@styled-icons/fa-regular'
import { Windows } from '@styled-icons/boxicons-regular'
import { Close } from '@styled-icons/evaicons-solid'

export const Wrapper = styled.div`
    width: 50vw;
    height: 60vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'IBM Plex Sans Arabic', sans-serif;

    @media only screen and (max-width: 768px) {
        width: 95%;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background: #010101;
`;

export const Navbar = styled.div`
    width: 100%;
    height: 6%;
    background: #333333;
    display: flex;
    justify-content: space-between;
`;

const navbarIconStyle = css`
   width: 30px;
    height: 30px;
    color: #898989;
    margin: 0 15px;
`;

export const Header = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    margin-left: 10px;
    color: white;
`;

export const IconContainer = styled.div`
    height: 100%;
    display: flex;
`;

export const IconWrapper = styled.div<{closeIcon?: boolean}>`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: ${props => props.closeIcon ? 'red' : '#5C5C5C'};
    }
`;

export const MinimalizeIcon = styled(WindowMinimize)`
    ${navbarIconStyle};
    padding-bottom: 10px;
`;

export const MaximalizeIcon = styled(Windows)`
    ${navbarIconStyle};
    width: 25px;
    height: 25px;
`;

export const CloseIcon = styled(Close)`${navbarIconStyle};`;

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

export const ImagesCheckContainerWrapper = styled.div`
    width: 100%;
    height: 44%;
    overflow-x: auto;
`;

export const ImagesCheckContainer = styled.div`
    width: 200%;
    height: 90%;
    display: flex;

    @media only screen and (max-width: 768px) {
        width: 300%;
    }
`;

export const CheckImageWrapper = styled.div<{checkImage?: number}>`
    width: 15%;
    height: 100%;
    margin: 0 10px;

    &:nth-child(${props => props.checkImage}) {
        border: 3px solid white;
    }

`;