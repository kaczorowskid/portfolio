import { createContext } from "react";

interface ContextType {
    clientHeight: number,
    setClientHeight: (val: number) => void
}

export const ClientHeightContext = createContext<ContextType>({
    clientHeight: 0,
    setClientHeight: () => {}
});
