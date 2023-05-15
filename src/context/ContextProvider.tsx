import { ReactElement, useReducer } from "react";
import AppReducer from "./AppReducer";
import { GlobalContext, initialState } from "./GlobalState";

type ChildrenType = {
  children: ReactElement[] | ReactElement;
};

export const GlobalProvider = ({ children }: ChildrenType) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
