import { createContext } from "react";

interface ContextType {
    clientHeight: number,
    setClientHeight: (val: any) => void
}

export const ClientHeightContext = createContext<ContextType>({
    clientHeight: 0,
    setClientHeight: () => {}
});
