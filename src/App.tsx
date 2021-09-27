import React, { useState } from 'react';
import AppContext from './context/AppContext';
import GlobalStyle from './GlobalStyle.styled';
import VisualStudioCode from './views/VisualStudioCode/VisualStudioCode';
import Terminal from './views/Terminal/Terminal';
import Icon from './components/Icon/Icon';
import { Visualstudiocode, Windowsterminal } from '@styled-icons/simple-icons'
import Settings from './views/Settings/Settings';
import { Settings2 } from '@styled-icons/evaicons-solid';
import { IAppContext } from './context/AppContext';
import { wallpapers } from './wallpapers';

const App: React.FC = () => {

  const wallpaperID: number = Number.parseInt(localStorage['checkImage'])

  const [displayTerminal, setDisplayTerminal] = useState<boolean>(false);
  const [displayVSC, setDisplayVSC] = useState<boolean>(false);
  const [displaySettings, setDisplaySettings] = useState<boolean>(false)
  const [checkWallpaper, setCheckWallpaper] = useState<number>(wallpaperID || 1)

  const value: IAppContext = {
    displayTerminal,
    setDisplayTerminal,
    displayVSC,
    setDisplayVSC,
    displaySettings,
    setDisplaySettings,
    checkWallpaper,
    setCheckWallpaper
  }

  return (
    <>
      <AppContext.Provider value={value}>
        <GlobalStyle wallpaper={wallpapers[checkWallpaper]} />
        <Icon onDoubleClick={() => setDisplayVSC(true)} nameApp='VisualStudioCode' icon={<Visualstudiocode />} />
        <Icon onDoubleClick={() => setDisplayTerminal(true)} nameApp='Terminal' icon={<Windowsterminal />} />
        <Icon onDoubleClick={() => setDisplaySettings(true)} nameApp='Settings' icon={<Settings2 />} />
        {displayVSC && <VisualStudioCode drag dragTransition={{ power: 0 }} />}
        {displayTerminal && <Terminal drag dragTransition={{ power: 0 }} />}
        {displaySettings && <Settings drag dragTransition={{ power: 0 }}  />}
      </AppContext.Provider>
    </>
  );
}

export default App;
