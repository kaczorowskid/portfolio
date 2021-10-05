import React from 'react';
import * as styled from './LeftSideIconColumn.styled';

const LeftSideIconColumn: React.FC = () => {
    return (
        <>
            <styled.Container>
                <styled.ExplorerIcon checked={true} />
                <styled.GitIcon />
                <styled.ExtensionIcon />
            </styled.Container>
        </>
    )
}
export default LeftSideIconColumn;