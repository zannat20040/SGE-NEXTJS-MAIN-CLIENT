'use client'
import React, { createContext, useContext, useState,  ReactNode } from 'react';

interface MyContextType {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyContextProvider = ({ children }: { children: ReactNode }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(true);

  

  return (
    <MyContext.Provider value={{ modalOpen, setModalOpen }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};
