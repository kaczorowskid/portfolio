import { useContext } from "react";
import { ClientHeightContext } from '@context';

export const useClientHeight = () => useContext(ClientHeightContext);