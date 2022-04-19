import React from 'react';
import { IiconData } from '@types';
import {
  Container,
  OpenFile,
  OpenFileName,
  CloseIconFile,
  MarkdownIcon,
  TSXIcon,
  TSIcon
} from './OpenFilesTab.styled';

interface Props {
  tabsData: string[];
  removeTab: (val: string) => void;
  setCheckTab: (val: number) => void;
  checkTab: number;
}

const OpenFilesTab: React.FC<Props> = ({ tabsData, removeTab, setCheckTab, checkTab }) => {

  const iconData: IiconData = {
    'aboutMe.md': {
      icon: <MarkdownIcon />
    },
    'projects.tsx': {
      icon: <TSXIcon />
    },
    'contact.ts': {
      icon: <TSIcon />
    }
  }

  return (
    <Container>
      {tabsData && tabsData.map((data: string, i: number) => (
        <OpenFile key={i} check={checkTab} onClick={() => setCheckTab && setCheckTab(i + 1)}>
          {iconData[data].icon}
          <OpenFileName> {data} </OpenFileName>
          <CloseIconFile onClick={() => removeTab(data)} />
        </OpenFile>
      ))}
    </Container>
  )
}

export default OpenFilesTab;