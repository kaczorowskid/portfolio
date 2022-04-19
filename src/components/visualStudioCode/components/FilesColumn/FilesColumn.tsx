import React, { useState } from 'react';
import {
  Container,
  FolderWrapper,
  FolderName,
  FolderOpenIcon,
  FolderCloseIcon,
  MarkdownIcon,
  TSXIcon,
  TSIcon
} from './FilesColumn.styled';

interface Props {
  config: { [k: string]: string };
  addArray: (val: string) => void;
}

const FilesColumn: React.FC<Props> = ({ config, addArray }) => {

  const { aboutMe, projects, contact } = config;
  const [openFolder, setOpenFolder] = useState<boolean>(true)


  return (
    <Container>
      <FolderWrapper small={true} >
        <FolderName>EXPLORER</FolderName>
      </FolderWrapper>
      <FolderWrapper onClick={() => setOpenFolder(prev => !prev)} small={true} >
        {openFolder ? <FolderOpenIcon /> : <FolderCloseIcon />}
        <FolderName>SRC</FolderName>
      </FolderWrapper>
      {openFolder && (
        <>
          <FolderWrapper onClick={() => addArray && addArray(aboutMe)}  >
            <MarkdownIcon />
            <FolderName >{aboutMe}</FolderName>
          </FolderWrapper>
          <FolderWrapper onClick={() => addArray && addArray(projects)} >
            <TSXIcon />
            <FolderName >{projects}</FolderName>
          </FolderWrapper >
          <FolderWrapper onClick={() => addArray && addArray(contact)} >
            <TSIcon />
            <FolderName >{contact}</FolderName>
          </FolderWrapper>
        </>
      )}
    </Container>
  )
}

export default FilesColumn;