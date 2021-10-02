import { useContext } from "react";
import { ClientHeightContext } from "../context/ClientHeightContext/ClientHeightContext";

export const useClientHeight = () => useContext(ClientHeightContext);

