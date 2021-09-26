import React, { useState, useContext, forwardRef } from 'react';
import * as styled from './VisualStudioCode.styled';
import { config } from './config';
import { IiconData } from './types';
import AboutMe from './Content/AboutMe';
import Contact from './Content/Contact';
import AppContext from '../../context/AppContext';
import { motion } from 'framer-motion';


const VisualStudioCode = forwardRef<HTMLDivElement, any>((_, ref) => {

    const { setDisplayVSC } = useContext(AppContext);

    const { aboutMe, projects, contact } = config;
    const [openFiles, setOpenFiles] = useState<Array<string>>([aboutMe])
    const [checkFile, setCheckFile] = useState<number>(1)
    const [openFolder, setOpenFolder] = useState<boolean>(true)
    const numbersLine = Array.from({ length: 45 }, (d, i) => i++).filter(i => i !== 0);

    const addToArray = (val: string) => {
        const set = new Set(openFiles);
        set.add(val)
        setOpenFiles(Array.from(set))
    }

    const filterArray = (val: string) => {
        setOpenFiles(openFiles.filter(i => i !== val))
    }

    const iconData: IiconData = {
        'aboutMe.md': {
            icon: <styled.MarkdownIcon />
        },
        'Projects.tsx': {
            icon: <styled.TSXIcon />
        },
        'contact.ts': {
            icon: <styled.TSIcon />
        }
    }

    return (
        <styled.Wrapper>
            <styled.Container ref={ref}>
                <styled.ContainerNavbar>
                    <styled.NavbarItemContainer>
                        <styled.NavbarItem>File</styled.NavbarItem>
                        <styled.NavbarItem>Edit</styled.NavbarItem>
                        <styled.NavbarItem>Selection</styled.NavbarItem>
                        <styled.NavbarItem>View</styled.NavbarItem>
                        <styled.NavbarItem>Go</styled.NavbarItem>
                        <styled.NavbarItem>Run</styled.NavbarItem>
                        <styled.NavbarItem>Terminal</styled.NavbarItem>
                        <styled.NavbarItem>Help</styled.NavbarItem>
                    </styled.NavbarItemContainer>
                    <styled.OpenFileNavbarName >{openFiles[checkFile - 1]}</styled.OpenFileNavbarName>
                    <styled.IconContainer>
                        <styled.IconWrapper>
                            <styled.MinimalizeIcon />
                        </styled.IconWrapper>
                        <styled.IconWrapper>
                            <styled.MaximalizeIcon />
                        </styled.IconWrapper>
                        <styled.IconWrapper onClick={() => setDisplayVSC(false)} closeIcon={true} >
                            <styled.CloseIcon />
                        </styled.IconWrapper>
                    </styled.IconContainer>
                </styled.ContainerNavbar>
                <styled.Window>
                    <styled.LeftColumn>
                        <styled.LeftSideIconContainer>
                            <styled.ExplorerIcon checked={true} />
                            <styled.GitIcon />
                            <styled.ExtensionIcon />
                        </styled.LeftSideIconContainer>
                        <styled.FilesContainer>
                            <styled.FolderWrapper small={true} >
                                <styled.FolderName>EXPLORER</styled.FolderName>
                            </styled.FolderWrapper>
                            <styled.FolderWrapper onClick={() => setOpenFolder(prev => !prev)} small={true} >
                                {openFolder ? <styled.FolderOpenIcon /> : <styled.FolderCloseIcon />}
                                <styled.FolderName>SRC</styled.FolderName>
                            </styled.FolderWrapper>
                            {openFolder && (
                                <>
                                    <styled.FolderWrapper onClick={() => addToArray(aboutMe)}  >
                                        <styled.MarkdownIcon />
                                        <styled.FolderName >{aboutMe}</styled.FolderName>
                                    </styled.FolderWrapper>
                                    <styled.FolderWrapper onClick={() => addToArray(projects)} >
                                        <styled.TSXIcon />
                                        <styled.FolderName >{projects}</styled.FolderName>
                                    </styled.FolderWrapper >
                                    <styled.FolderWrapper onClick={() => addToArray(contact)} >
                                        <styled.TSIcon />
                                        <styled.FolderName >{contact}</styled.FolderName>
                                    </styled.FolderWrapper>
                                </>
                            )}
                        </styled.FilesContainer>
                    </styled.LeftColumn>
                    <styled.EditorWrapper>
                        <styled.OpenFilesContainer>
                            {openFiles.map((data: string, i: number) => (
                                <styled.OpenFile key={i} check={checkFile} onClick={() => setCheckFile(i + 1)}>
                                    {iconData[data].icon}
                                    <styled.OpenFileName> {data} </styled.OpenFileName>
                                    <styled.CloseIconFile onClick={() => filterArray(data)} />
                                </styled.OpenFile>
                            ))}
                        </styled.OpenFilesContainer>
                        <styled.Editor>
                            <styled.NumberLinesContainer>
                                {numbersLine.map(i => <styled.Number key={i} >{i}</styled.Number>)}
                            </styled.NumberLinesContainer>
                            <styled.Content>
                                {(openFiles[checkFile - 1] == aboutMe) && <AboutMe />}
                                {(openFiles[checkFile - 1] == projects) && <div>projects</div>}
                                {(openFiles[checkFile - 1] == contact) && <Contact />}
                            </styled.Content>
                        </styled.Editor>
                    </styled.EditorWrapper>
                </styled.Window>
                <styled.Footer></styled.Footer>
            </styled.Container>
        </styled.Wrapper>
    )
})

export default motion(VisualStudioCode, { forwardMotionProps: true })