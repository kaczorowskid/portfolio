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
    setDisplayTerminal: (val: boolean) => {},
    displayVSC: false,
    setDisplayVSC: (val: boolean) => {},
    displaySettings: false,
    setDisplaySettings: (val: boolean) => {},
    checkWallpaper: 0,
    setCheckWallpaper: (val: number) => {}
});

export default AppContext