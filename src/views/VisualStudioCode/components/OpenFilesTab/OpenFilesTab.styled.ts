import { Markdown, ReactLogo } from '@styled-icons/boxicons-logos';
import { Close } from '@styled-icons/evaicons-solid';
import { Typescript } from '@styled-icons/simple-icons';
import styled, { css } from 'styled-components'
import { device } from '../../../../helper/deviceSize';

export const Container = styled.div`
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

const iconStyle = css`
    width: 30px;
    height: 30px;
    color: #898989;
    margin: 0 15px;
`

export const CloseIconFile = styled(Close)`
    ${iconStyle};

    &:hover {
        background: #3B3C3C;
    }

    @media only screen and (${device.laptop}) {
       display: none;
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

export const MarkdownIcon = styled(Markdown)`${logoIconStyle}`;
export const TSXIcon = styled(ReactLogo)`${logoIconStyle}`;
export const TSIcon = styled(Typescript)`
    ${logoIconStyle};
    color: #90A4AE;
    width: 25px;
    margin: 0 3px;
`;