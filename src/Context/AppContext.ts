import { createContext } from 'react'

export interface IAppContext {
    displayTerminal: boolean
    setDisplayTerminal: (val: boolean) => void
    displayVSC: boolean
    setDisplayVSC: (val: boolean) => void
    displaySettings: boolean
    setDisplaySettings: (val: boolean) => void
    checkWallpaper: number,
    setCheckWallpaper: (val: number) => void
}


const AppContext = createContext<IAppContext>({
    displayTerminal: false,
    setDisplayTerminal: () => {},
    displayVSC: false,
    setDisplayVSC: () => {},
    displaySettings: false,
    setDisplaySettings: () => {},
    checkWallpaper: 0,
    setCheckWallpaper: () => {}
});

export default AppContext