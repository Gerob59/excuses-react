import React, { ReactNode, useState } from "react";
import AppContext, { AppContextData } from "../context/AppContext";
import Excuse from "../models/Excuse";

type AppContextProviderProps = {
  children: ReactNode;
};

const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [excuseList, setExcuseList] = useState<Excuse[]>([]);

  const appContextData: AppContextData = {
    excuseList,
    setExcuseList,
  };

  return (
    <AppContext.Provider value={appContextData}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
