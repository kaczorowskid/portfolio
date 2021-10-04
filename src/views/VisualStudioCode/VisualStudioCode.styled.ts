import styled, { css } from 'styled-components';
import { WindowMinimize } from '@styled-icons/fa-regular'
import { Windows, GitBranch, BorderAll } from '@styled-icons/boxicons-regular'
import { Close } from '@styled-icons/evaicons-solid'
import { Documents } from '@styled-icons/ionicons-outline'
import { FolderOpen, Folder } from '@styled-icons/boxicons-solid'
import { Markdown } from '@styled-icons/boxicons-logos'
import { ReactLogo } from '@styled-icons/boxicons-logos'
import { Typescript } from '@styled-icons/simple-icons'
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

export const ContainerNavbar = styled.div`
    width: 100%;
    height: 6%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 100%;
    background: #323233;

    @media only screen and (${device.laptop}) {
        display: flex;
    }
`;

export const NavbarItemContainer = styled.div`
    display: flex;

    @media only screen and (${device.laptop}) {
        display: none;
    }

`;

export const NavbarItem = styled.div`
    height: 100%;
    padding: 0px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #898989;
    font-size: 20px;
    cursor: default;

    &:hover {
        background: #474748;
    }
`;

export const OpenFileNavbarName = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #898989;
    font-size: 20px;
    cursor: default;
`;

export const IconContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const IconWrapper = styled.div<{ closeIcon?: boolean }>`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    &:hover {
        background: ${props => props.closeIcon ? 'red' : '#474748'}
    }
`;

const iconStyle = css`
    width: 30px;
    height: 30px;
    color: #898989;
    margin: 0 15px;
`

export const MinimalizeIcon = styled(WindowMinimize)`
    ${iconStyle};
    padding-bottom: 10px;
`;

export const MaximalizeIcon = styled(Windows)`
    ${iconStyle};
    width: 25px;
    height: 25px;
`;

export const CloseIcon = styled(Close)`${iconStyle};`;

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

export const LeftSideIconContainer = styled.div`
    width: 25%;
    height: 100%;
    background: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const leftSideIconStyle = css`
    color: #858585;
    width: 50px;
    margin: 15px 0;
    cursor: pointer;

    &:hover {
        color: white;
    }
`;

export const ExplorerIcon = styled(Documents)<{checked?:boolean}>`
    ${leftSideIconStyle};
    color: ${props => props.checked ? 'white' : '#858585'};
`;
export const GitIcon = styled(GitBranch)`${leftSideIconStyle};`;
export const ExtensionIcon = styled(BorderAll)`${leftSideIconStyle};`;

export const FilesContainer = styled.div`
    width: 80%;
    height: 100%;
    background: #252526;
`;

export const FolderWrapper = styled.div<{ small?: boolean }>`
    display: flex;
    align-items: center;
    padding: 10px ${props => props.small ? '15px' : '45px'} ;
    cursor: pointer;

    &:hover{
        background: #37373D;
    }
`;

const logoIconStyle = css`
    color: #90A4AE;
    width: 30px;
    height: 30px;

    @media only screen and (${device.laptop}) {
        width: 15px;
        height: 15px;
    }
`;

export const FolderOpenIcon = styled(FolderOpen)`${logoIconStyle}`;
export const FolderCloseIcon = styled(Folder)`${logoIconStyle}`;
export const MarkdownIcon = styled(Markdown)`${logoIconStyle}`;
export const TSXIcon = styled(ReactLogo)`${logoIconStyle}`;
export const TSIcon = styled(Typescript)`
    ${logoIconStyle};
    color: #90A4AE;
    width: 25px;
    margin: 0 3px;
`;

export const FolderName = styled.span`
    color: #CCCCCC;
    margin-left: 10px;
    font-size: 17px;
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

export const OpenFilesContainer = styled.div`
    width: 100%;
    height: 6%;
    background: #252526;
    display:  flex;

    @media only screen and (${device.laptop}) {
        width: 200%;
    }
`;

export const OpenFile = styled.div<{check?: number}>`
    width: 20%;
    height: 100%;
    background: #2D2D2D;
    margin: 0 2px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 10px;
    cursor: default;

    &:nth-child(${props => props.check}){
        background: #1E1E1E;
    }

    @media only screen and (${device.laptop}) {
        width: 16%;
        justify-content: space-around;
    }
    
`;

export const OpenFileName = styled.span`
    color: white;

    @media only screen and (${device.laptop}) {
       font-size: 12px;
    }
`;

export const CloseIconFile = styled(Close)`
    ${iconStyle};

    &:hover {
        background: #3B3C3C;
    }

    @media only screen and (${device.laptop}) {
       display: none;
    }
    
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


export const Footer = styled.div`
    width: 100%;
    height: 4%;
    background: #007ACC;
`;