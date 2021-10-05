import React, { useState } from 'react';
import { config } from '../../config';
import * as styled from './FilesColumn.styled'

interface Props {
    addArray?: (val: any) => void
}

const FilesColumn: React.FC<Props> = ({addArray}) => {

    const { aboutMe, projects, contact } = config;
    const [openFolder, setOpenFolder] = useState<boolean>(true)


    return (
            <styled.Container>
                <styled.FolderWrapper small={true} >
                    <styled.FolderName>EXPLORER</styled.FolderName>
                </styled.FolderWrapper>
                <styled.FolderWrapper onClick={() => setOpenFolder(prev => !prev)} small={true} >
                    {openFolder ? <styled.FolderOpenIcon /> : <styled.FolderCloseIcon />}
                    <styled.FolderName>SRC</styled.FolderName>
                </styled.FolderWrapper>
                {openFolder && (
                    <>
                        <styled.FolderWrapper onClick={() => addArray && addArray(aboutMe)}  > 
                            <styled.MarkdownIcon />
                            <styled.FolderName >{aboutMe}</styled.FolderName>
                        </styled.FolderWrapper>
                        <styled.FolderWrapper onClick={() => addArray && addArray(projects)} >
                            <styled.TSXIcon />
                            <styled.FolderName >{projects}</styled.FolderName>
                        </styled.FolderWrapper >
                        <styled.FolderWrapper onClick={() => addArray && addArray(contact)} >
                            <styled.TSIcon />
                            <styled.FolderName >{contact}</styled.FolderName>
                        </styled.FolderWrapper>
                    </>
                )}
            </styled.Container>
    )
}

export default FilesColumn;