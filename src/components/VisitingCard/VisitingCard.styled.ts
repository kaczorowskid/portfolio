import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Github } from '@styled-icons/bootstrap';
import { Linkedin } from '@styled-icons/bootstrap';
import { ViewTile } from '@styled-icons/zondicons';
import { Library } from '@styled-icons/fluentui-system-filled'
import { ProductHunt } from '@styled-icons/boxicons-logos'



export const Container = styled(motion.div)<{rotate?: string, top?: number}>`
    position: absolute;
    top: calc(50% - ${props => props.top}%);
    left: 100%;
    transform: translate(-50%, -50%) rotateZ(${props => props.rotate});
    width: 700px;
    height: 350px;
    border: 3px solid black;
    border-radius: 10px;
    background: #3c3c3c;
    box-shadow: 5px 5px 5px black;
    z-index: 100;
    font-family: 'Dancing Script', cursive;
`;

export const Grid = styled.div`
    display: grid;
    position: relative;
    grid-template-columns: 35% 65%;
    height: 100%;
`;

export const PersonalInfoContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    background: #202020;
    border-right: 5px solid #0d570d;
`;

export const Image = styled(motion.img)`
    width: 100px;
    height: 100px;
    box-shadow: 0px 0px 15px green;
    padding: 5px;
    border: 3px solid green;
    border-radius: 50%;
`;

export const Name = styled.div`
    position: relative;
    top: -20px;
    font-size: 25px;
    font-family: 'Dancing Script', cursive;
    color: white;
`;

export const QRImage = styled.img`
    width: 100px;
    height: 100px;
    box-shadow: 0px 0px 15px green;
    padding: 5px;
    border: 5px solid #0d570d;
`;

export const InfoContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const iconStyled = css`
    width: 50px;
    height: 50px;
    position: relative;
    border-radius: 50%;
    top: -30px;
    left: -30px;
    background: #202020;
`;

export const GithubIcon = styled(motion(Github))<{bgColor?: string}>`
    ${iconStyled};
    padding: 3px;
    border: 1px solid ${props => props.bgColor};
    color: ${props => props.bgColor};
`;

export const ProjectsIcon = styled(motion(Linkedin))<{bgColor?: string}>`
    ${iconStyled};
    padding: 3px;
    border: 1px solid ${props => props.bgColor};
    color: ${props => props.bgColor};
`;

export const LibraryIcon = styled(motion(ProductHunt))<{bgColor?: string}>`
    ${iconStyled};
    width: 50px;
    height: 50px;
    border: 1px solid ${props => props.bgColor};
    color: ${props => props.bgColor};
`;

export const Info = styled(motion.div)<{borderColor?: string, test?: any}>`
    width: 80%;
    height: 15%;
    background: #202020;
    display: flex;
    border-radius: 15px;
    border: 2px solid ${props => props.borderColor};
    cursor: pointer;

    &:hover {
        background: #464646;
    }
`;

export const ContentContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: red;
    display: flex;
`;

export const Data = styled.div`
    position: relative;
    color: white;
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-weight: bold;
    font-family: 'Dancing Script', cursive;
`;

export const Color = styled.span<{color?: string}>`
    color: ${props => props.color}
`;