import React, { useContext, useEffect } from 'react';
import { Visualstudiocode, Windowsterminal } from '@styled-icons/simple-icons';
import { Settings2 } from '@styled-icons/evaicons-solid';
import { VisualStudioCode, Terminal, Settings } from '@views';
import { Icon } from '@components';
import { GlobalStyle, wallpapers } from '@styles';
import { AppContext } from '@context';

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
      {displayVSC && <VisualStudioCode drag dragTransition={{ power: 0 }} />}
      {displayTerminal && <Terminal drag dragTransition={{ power: 0 }} />}
      {displaySettings && <Settings drag dragTransition={{ power: 0 }} />}
    </>
  );
}

export default App;
