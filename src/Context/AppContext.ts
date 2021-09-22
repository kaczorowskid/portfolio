import { createContext } from 'react'

export interface IAppContext {
    displayPortfolio: boolean
    setDisplayPortfolio: (val: boolean) => void
}

const AppContext = createContext<IAppContext>({
    displayPortfolio: false,
    setDisplayPortfolio: (val: boolean) => {}
});

export default AppContext