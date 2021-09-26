import React, { useState, useEffect, useRef } from 'react';
import AppContext from './context/AppContext';
import GlobalStyle from './GlobalStyle.styled';
import VisualStudioCode from './views/VisualStudioCode/VisualStudioCode';
import Terminal from './views/Terminal/Terminal';
import Icon from './components/Icon/Icon';
import { Visualstudiocode, Windowsterminal } from '@styled-icons/simple-icons'
import wallpaper from './assets/img/wallpaper.png';


const App: React.FC = () => {

  const [displayTerminal, setDisplayTerminal] = useState<boolean>(false);
  const [displayVSC, setDisplayVSC] = useState<boolean>(false);

  return (
    <>
      <AppContext.Provider value={{ displayTerminal, setDisplayTerminal, displayVSC, setDisplayVSC }}>
        <GlobalStyle wall = {wallpaper} />
        <Icon onDoubleClick={() => setDisplayVSC(true)} nameApp='VisualStudioCode' icon={<Visualstudiocode />} />
        <Icon onDoubleClick={() => setDisplayTerminal(true)} nameApp='Terminal' icon={<Windowsterminal />} />
        {displayVSC && <VisualStudioCode drag dragTransition={{ power: 0 }} />}
        {displayTerminal && <Terminal drag dragTransition={{ power: 0 }} />}
      </AppContext.Provider>
    </>
  );
}

export default App;
