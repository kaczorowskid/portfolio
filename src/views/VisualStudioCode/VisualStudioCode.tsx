import React, { useState, forwardRef, useContext } from 'react';
import * as styled from './VisualStudioCode.styled';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import LeftSideIconColumn from './components/LeftSideIconColumn/LeftSideIconColumn';
import FilesColumn from './components/FilesColumn/FilesColumn';
import OpenFilesTab from './components/OpenFilesTab/OpenFilesTab';
import { config } from './config';
import AboutMe from './Content/components/AboutMe';
import Contact from './Content/components/Contact';
import { motion } from 'framer-motion';
import Projects from './Content/components/Projects';
import { useClientHeight } from '../../hooks/useClientHeight';
import { AppContext } from '../../context/AppContext/AppContext';


const VisualStudioCode = forwardRef<HTMLDivElement, any>((_, ref) => {

    const { setDisplayVSC } = useContext(AppContext);

    const { aboutMe, projects, contact } = config;
    const { clientHeight } = useClientHeight();

    const [openFiles, setOpenFiles] = useState<Array<string>>([aboutMe, projects, contact])
    const [checkFile, setCheckFile] = useState<number>(1)

    const numbersLine = Array.from({ length: (clientHeight / 40) }, (_, i) => i++);

    const addToArrayOpenTabs = (val: string) => {
        const set = new Set(openFiles);
        set.add(val)
        setOpenFiles(Array.from(set))
    }

    const filterArrayOpenTabs = (val: string) => {
        setOpenFiles(openFiles.filter(i => i !== val))
    }

    return (
        <styled.Wrapper>
            <styled.Container ref={ref}>
                <Navbar openFileTitle={openFiles[checkFile - 1]} setDisplayVSC = {setDisplayVSC} />
                <styled.Window>
                    <styled.LeftColumn>
                        <LeftSideIconColumn />
                        <FilesColumn addArray={addToArrayOpenTabs} />
                    </styled.LeftColumn>
                    <styled.EditorWrapper>
                        <OpenFilesTab
                            checkTab={checkFile}
                            tabsData={openFiles}
                            removeTab={filterArrayOpenTabs}
                            setCheckTab={setCheckFile}
                        />
                        <styled.Editor>
                            <styled.NumberLinesContainer>
                                {numbersLine.map(i => <styled.Number key={i} >{i + 1}</styled.Number>)}
                            </styled.NumberLinesContainer>
                            <styled.Content>
                                {(openFiles[checkFile - 1] == aboutMe) && <AboutMe />}
                                {(openFiles[checkFile - 1] == projects) && <Projects />}
                                {(openFiles[checkFile - 1] == contact) && <Contact />}
                            </styled.Content>
                        </styled.Editor>
                    </styled.EditorWrapper>
                </styled.Window>
                <Footer />
            </styled.Container>
        </styled.Wrapper>
    )
})

export default motion(VisualStudioCode, { forwardMotionProps: true })