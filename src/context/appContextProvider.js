import { createContext, useContext, useReducer } from "react";
import { initialState, restaurantReducer } from "./contextReducer";

export const AllContext = createContext(null);

export default function AllContextProvider({ children }) {
  const [resturantData, dispatchFunction] = useReducer(
    restaurantReducer,
    initialState
  );

  const value = { resturantData, dispatchFunction };
  return <AllContext.Provider value={value}>{children}</AllContext.Provider>;
}

export const useALlContext = () => {
  const context = useContext(AllContext);
  return context;
};
