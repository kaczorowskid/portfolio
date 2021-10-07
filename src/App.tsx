import React, { useContext, useEffect } from 'react';
import GlobalStyle from './GlobalStyle.styled';
import VisualStudioCode from './views/VisualStudioCode/VisualStudioCode';
import Terminal from './views/Terminal/Terminal';
import Icon from './components/Icon/Icon';
import { Visualstudiocode, Windowsterminal } from '@styled-icons/simple-icons'
import Settings from './views/Settings/Settings';
import { Settings2 } from '@styled-icons/evaicons-solid';
import { wallpapers } from './wallpapers';
import { ClientHeightProvider } from './context/ClientHeightContext/ClientHeightProvider';
import { AppContext } from './context/AppContext/AppContext';

const App: React.FC = () => {

  const {
    displayTerminal,
    setDisplayTerminal,
    displayVSC,
    setDisplayVSC,
    displaySettings,
    setDisplaySettings,
    checkWallpaper,
  } = useContext(AppContext)

  return (
    <>
      <GlobalStyle wallpaper={wallpapers[checkWallpaper]} />
      <div style={{ width: '100%', display: 'flex' }} >
        <Icon onDoubleClick={() => setDisplayVSC(true)} nameApp='VisualStudioCode' icon={<Visualstudiocode />} />
        <Icon onDoubleClick={() => setDisplayTerminal(true)} nameApp='Terminal' icon={<Windowsterminal />} />
        <Icon onDoubleClick={() => setDisplaySettings(true)} nameApp='Settings' icon={<Settings2 />} />
      </div>
      {displayVSC && (
        <ClientHeightProvider >
          <VisualStudioCode drag dragTransition={{ power: 0 }} />
        </ClientHeightProvider>
      )}
      {displayTerminal && <Terminal drag dragTransition={{ power: 0 }} />}
      {displaySettings && <Settings drag dragTransition={{ power: 0 }} />}
    </>
  );
}

export default App;
