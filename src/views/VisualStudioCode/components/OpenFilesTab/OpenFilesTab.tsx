import React from 'react';
import { IiconData } from '../../types';
import * as styled from './OpenFilesTab.styled'

interface Props {
    tabsData?: Array<string>
    removeTab: (val: string) => void
    setCheckTab?: (val: number) => void
    checkTab: number
}

const OpenFilesTab: React.FC<Props> = ({tabsData, removeTab, setCheckTab, checkTab}) => {
    
    const iconData: IiconData = {
        'aboutMe.md': {
            icon: <styled.MarkdownIcon />
        },
        'projects.tsx': {
            icon: <styled.TSXIcon />
        },
        'contact.ts': {
            icon: <styled.TSIcon />
        }
    }

    return (
        <>
            <styled.Container>
                {tabsData && tabsData.map((data: string, i: number) => (
                    <styled.OpenFile key={i} check={checkTab} onClick={() => setCheckTab && setCheckTab(i + 1)}>
                        {iconData[data].icon}
                        <styled.OpenFileName> {data} </styled.OpenFileName>
                        <styled.CloseIconFile onClick={() => removeTab(data)} />
                    </styled.OpenFile>
                ))}
            </styled.Container>
        </>
    )
}

export default OpenFilesTab;