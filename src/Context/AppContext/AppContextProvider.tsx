import React, { useState } from 'react'
import { AppContext, IAppContext } from './AppContext';

interface Props {
    children: React.ReactNode
}

const AppContextProvider: React.FC<Props> = ({ children }) => {

    const wallpaperID: number = Number.parseInt(localStorage['checkImage'])

    const [displayTerminal, setDisplayTerminal] = useState<boolean>(false);
    const [displayVSC, setDisplayVSC] = useState<boolean>(false);
    const [displaySettings, setDisplaySettings] = useState<boolean>(false)
    const [checkWallpaper, setCheckWallpaper] = useState<number>(wallpaperID)
  
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
        <AppContext.Provider value = {value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;