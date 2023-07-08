import { createContext, useContext } from "react";

export const AllContext = createContext(null);

export default function AllContextProvider({ children }) {
  const value = {};
  return <AllContext.Provider value={value}>{children}</AllContext.Provider>;
}

export const useALlContext = () => {
  const context = useContext(AllContext);
  return context;
};
