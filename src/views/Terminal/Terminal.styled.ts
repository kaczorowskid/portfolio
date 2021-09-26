import styled, { css } from 'styled-components'
import { WindowMinimize } from '@styled-icons/fa-regular'
import { Windows } from '@styled-icons/boxicons-regular'
import { Close } from '@styled-icons/evaicons-solid'

export const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    width: 50vw;
    height: 60vh;
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background: #0C0C0C;
    border-radius: 2px;
    overflow: hidden;
    border: 1px solid black;
    box-shadow: 0px 0px 15px black;
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

export const OutputContainer = styled.div`
    width: 100%;
    padding-left: 15px;
    margin-bottom: 10px;
    height: 80%;
    /* color: #1342b9; */
    color: white;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const Output = styled.div`
    font-size: 20px;
`;

export const InputContainer = styled.div`
    display: flex;
    height: auto;
    align-items: center;
    font-size: 20px;
`;

export const Tilde = styled.div`
    color: #16C60C;
    padding-left: 15px;
`;

export const Prompt = styled.div`
    height: 30px;
    color: #16C60C;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-right: 5px;
`;

export const Cursor = styled.div<{ blink?: boolean }>`
    width: 2px;
    height: 25px;
    background: white;
    display: ${props => props.blink ? 'block' : 'none'};
    /* border: 1px solid red; */
`;

export const InputElement = styled.input`
    width: 0;
    padding: 0;
    border: none;
    background: none;
    z-index: -1;
`;

export const Input = styled.div`
    height: 30px;
    color: white;
    display: flex;
    align-items: center;
`;

export const TestInput = styled.div`
    display: inline;
    word-break: break-all;
    outline: none;
    visibility: visible;
`;

export const TestLabel = styled.label`
    border: 0;
    padding: 0;
    outline: none;
    background-color: #0F0;
    display: inline-block;
    font-family: monospace;
`;

export const Footer = styled.div`
    width: 100%;
    height: 7%;
    background: #0c1e08;
    position: absolute;
    bottom: 0;
    display: grid;
    grid-template-columns: 5% 55% 20% 20%;
    grid-template-rows: 100%;
`;

export const NumberTerminal = styled.div`
    background: #1342b9;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #0c1e08;
`;

export const TerminalType = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    color: white;
    color: #1342b9;
    padding-left: 20px;
`;

export const ActualPath = styled.span`
    color: #3B78FF;
`;