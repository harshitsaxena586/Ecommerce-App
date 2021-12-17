import { createContext, useContext, useReducer } from "react";
import { reducer } from "../Reducer/reducer";

const AppContext = createContext();
let userId = localStorage.getItem("userId");
const initialState = {
  sortby: null,
  category: null,
  products: [],
  isFilterApplied: null,
  filteredProducts: [],
  cart: [],
  userId: userId,
};
export function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
