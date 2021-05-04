import react, { useReducer } from "react";

export const reducer= (state,action)=>{
    switch(action.type){
        case "SORT":
        return {...state,sortby:action.payload,isFilterApplied:true};
        case "category-filter":
        return {...state,category:action.payload,isFilterApplied:true};
        case "FILTERAPPLIED":
        return {...state,filteredProducts:action.payload};
        case "CLEARFILTER":
        return {...state,filteredProducts:action.payload};
        case "ADDTOCART":
        return {...state,cartItems:state.cartItems.concat({...action.payload,quantity:1})}
        case "REMOVEFROMCART":
        return {...state,cartItems:state.cartItems.filter(item=>item!=action.payload)}
        case "LOGGEDINUSER":
        return {...state,userName:action.payload}
    }
  }

