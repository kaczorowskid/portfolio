import { Markdown, ReactLogo } from '@styled-icons/boxicons-logos';
import { Folder, FolderOpen } from '@styled-icons/fa-regular';
import { Typescript } from '@styled-icons/simple-icons';
import styled, { css } from 'styled-components';
import { device } from '../../../../helper/deviceSize';

export const Container = styled.div`
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