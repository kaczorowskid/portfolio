import React, { useState, useEffect } from 'react';
import AppContext from './Context/AppContext';
import GlobalStyle from './GlobalStyle.styled';
import Terminal from './components/Terminal/Terminal';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Startup from './components/Startup/Startup';
import { data } from './mock/dataProjects/dataProjects';

const App: React.FC = () => {

  const [displayPortfolio, setDisplayPortfolio] = useState<boolean>(false)
  const [displayContent, setDisplayContent] = useState<boolean>(false)

  useEffect(() => {
    const timeout = setTimeout(() => setDisplayContent(true), 6000);
    return () => clearTimeout(timeout)
  }, [])


  return (
    <>
      <AppContext.Provider value={{ displayPortfolio, setDisplayPortfolio }}>
        <GlobalStyle />
        <Terminal />
        <Skills />
        <Projects data={data} />
      </AppContext.Provider>
    </>
  );
}

export default App;
