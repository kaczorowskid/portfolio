import React, { useState } from 'react';
import { ClientHeightContext } from './ClientHeightContext';

interface Props {
  children: React.ReactNode;
}

const ClientHeightProvider: React.FC<Props> = ({ children }) => {

  const [clientHeight, setClientHeight] = useState<number>(0);

  return (
    <ClientHeightContext.Provider value={{ clientHeight, setClientHeight }} >
      {children}
    </ClientHeightContext.Provider>
  )
}

export default ClientHeightProvider;
