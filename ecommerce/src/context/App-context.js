import react, { createContext, useContext, useReducer } from "react";
import { AllProducts } from "../Pages/primaryDB";
import {  reducer } from "../Reducer/AppReducer";

const AppContext = createContext();

const initialState={
  sortby:null,
  category:null,
  products:AllProducts,
  isFilterApplied:null,
  filteredProducts:false,
  cartItems:[],
  userName:null
}
export function AppContextProvider({ children }) {
 

  const [state,dispatch]=useReducer(reducer,initialState)
  
  return (
    <AppContext.Provider value={{state,dispatch}}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
 return useContext(AppContext);
}
