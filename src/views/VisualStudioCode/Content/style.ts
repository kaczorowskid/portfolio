import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100%;
    white-space: pre-wrap;
`;

export const Line = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-family: 'Inconsolata', monospace;
`;

export const Tab = styled.span`
    height: 100%;
    width: 60px;
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
`;

export const Image = styled.img`
    width: 300px;
    height: 200px;
`;

export const AvatarContainer = styled.div`
    width: 150px;
    height: 150px;
    position: relative;
    left: 10%;
`;

export const Const = styled.span`
    color: #569CCA;
`;

export const ObjectName = styled.span`
    color: #4FC1FF;
`;

export const ObjectKey = styled.span`
    color: #9CDCFE;
`;

export const Type = styled.span`
    color: #4EC9B0;
`;

export const String = styled.span`
    color: #CE8349;
`;

export const PortfolioImageContainer = styled.div`
    width: 100%;
    height: 480px;
    display: flex;
    align-items: center;
`;


export const PortfolioImage = styled.img`
    width: 700px;
    height: 450px;
`;

export const ButtonContainer = styled.div`
    width: 300px;
    height:150px;
    /* background: black; */
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    display: none;
    justify-content: space-evenly;
    align-items: center;
`;

export const Button = styled.button`
    width: 40%;
    height: 50%;
    font-size: 20px;
    background: black;
    border: none;
    color: white;
    cursor: pointer;
    border: 2px solid white;
`;

export const PortfolioImageWrapper = styled.div`
    position: relative;

    &:hover :not(${ButtonContainer}):not(${Button}) {
        transition: all 0.5s ease;
        filter: blur(10px);
    }
`;