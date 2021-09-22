import styled, { css } from 'styled-components'

export const  Wrapper = styled.div`
    width: 100%;
    height: 100vh;
`;

export const Container = styled.div`
    width: 50vw;
    height: 60vh;
    background: #0a1704;
    border-radius: 20px;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    box-shadow: 0px 0px 15px black;
`;

export const Navbar = styled.div`
    width: 100%;
    height: 6%;
    background: black;
`;

const buttonStyle = css`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    top: 50%;
    transform: translate(0, -50%);
    margin-left: 5px;
`;

export const Button = styled.div<{buttonColor?: string}>`
    ${buttonStyle};
    background: ${props => props.buttonColor};
`;

export const OutputContainer = styled.div`
    width: 100%;
    padding-left: 15px;
    margin-bottom: 10px;
    height: 80%;
    color: #1342b9;
    white-space: nowrap;
    font-family: 'IBM Plex Sans Arabic', sans-serif;
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
    color: green;
    padding-left: 15px;
`;

export const Prompt = styled.div`
    height: 30px;
    color: green;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-right: 5px;
    font-family: 'IBM Plex Sans Arabic', sans-serif;

`;

export const Cursor = styled.div<{blink?: boolean}>`
    width: 10px;
    height: 25px;
    background: green;
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
    color: green;
    font-family: 'IBM Plex Sans Arabic', sans-serif;
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
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    color: #0c1e08;
`;

export const TerminalType = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    color: white;
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    color: #1342b9;
    padding-left: 20px;
`;

export const ActualPath = styled.span`
    color: #1342b9;
`;