import { createContext } from 'react'

export interface IAppContext {
    displayTerminal: boolean
    setDisplayTerminal: (val: boolean) => void
    displayVSC: boolean
    setDisplayVSC: (val: boolean) => void
}

const AppContext = createContext<IAppContext>({
    displayTerminal: false,
    setDisplayTerminal: (val: boolean) => {},
    displayVSC: false,
    setDisplayVSC: (val: boolean) => {}
});

export default AppContext