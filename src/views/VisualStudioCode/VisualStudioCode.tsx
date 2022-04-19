import React, { useState, forwardRef, useContext } from 'react';
import { motion, MotionProps } from 'framer-motion';
import {
  Wrapper,
  Container,
  Window,
  LeftColumn,
  EditorWrapper,
  Editor,
  NumberLinesContainer,
  Number,
  Content
} from './VisualStudioCode.styled';
import {
  Footer,
  VSCNavbar,
  LeftSideIconColumn,
  FilesColumn,
  OpenFilesTab,
  AboutMe,
  Contact,
  Projects
} from '@components';
import { config } from './config';
import { useClientHeight } from '@hooks';
import { AppContext, ClientHeightProvider } from '@context'
import { skills as userSkill, contact as userContact, projects as userProjects } from './content';

const VSC = forwardRef<HTMLDivElement, any>((_, ref) => {

  const { setDisplayVSC } = useContext(AppContext);

  const { aboutMe, projects, contact } = config;
  const { clientHeight } = useClientHeight();

  const [openFiles, setOpenFiles] = useState<Array<string>>([aboutMe, projects, contact]);
  const [checkFile, setCheckFile] = useState<number>(1);

  const numbersLine = Array.from({ length: (clientHeight / 40) }, (_, i) => i++);

  const addToArrayOpenTabs = (val: string) => {
    const set = new Set(openFiles);
    set.add(val);
    setOpenFiles(Array.from(set));
  }

  const filterArrayOpenTabs = (val: string) => {
    setOpenFiles(openFiles.filter(i => i !== val));
  }

  return (
    <Wrapper>
      <Container ref={ref}>
        <VSCNavbar openFileTitle={openFiles[checkFile - 1]} setDisplayVSC={setDisplayVSC} />
        <Window>
          <LeftColumn>
            <LeftSideIconColumn />
            <FilesColumn addArray={addToArrayOpenTabs} config={config} />
          </LeftColumn>
          <EditorWrapper>
            <OpenFilesTab
              checkTab={checkFile}
              tabsData={openFiles}
              removeTab={filterArrayOpenTabs}
              setCheckTab={setCheckFile}
            />
            <Editor>
              <NumberLinesContainer>
                {numbersLine.map(i => <Number key={i} >{i + 1}</Number>)}
              </NumberLinesContainer>
              <Content>
                {(openFiles[checkFile - 1] === aboutMe) && <AboutMe skills={userSkill} />}
                {(openFiles[checkFile - 1] === projects) && <Projects projects={userProjects} />}
                {(openFiles[checkFile - 1] === contact) && <Contact contact={userContact} />}
              </Content>
            </Editor>
          </EditorWrapper>
        </Window>
        <Footer />
      </Container>
    </Wrapper>
  )
})

const VSCMotion = motion(VSC, { forwardMotionProps: true })

const VisualStudioCode: React.FC<MotionProps> = ({ ...props }) => {
  return (
    <ClientHeightProvider>
      <VSCMotion {...props} />
    </ClientHeightProvider>
  )
}

export default VisualStudioCode;