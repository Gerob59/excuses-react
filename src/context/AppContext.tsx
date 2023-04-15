import { createContext } from "react";
import Excuse from "../models/Excuse";

export type AppContextData = {
  excuseList: Excuse[];
  setExcuseList: (excuses: Excuse[]) => void;
};

const AppContext = createContext<AppContextData>({
  excuseList: [],
  setExcuseList: () => {},
});

export default AppContext;
