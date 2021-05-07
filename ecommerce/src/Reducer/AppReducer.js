export const reducer= (state,action)=>{
    switch(action.type){
        case "SORT":
        return {...state,sortby:action.payload,isFilterApplied:true};
        case "category-filter":
        return {...state,category:action.payload,isFilterApplied:true};
        case "FILTERAPPLIED":
        return {...state,filteredProducts:action.payload};
        case "RESETFILTER":
        return {...state,isFilterApplied:false};
        case "ADDTOCART":
        return {...state,cartItems:state.cartItems.concat({...action.payload,quantity:1})}
        case "REMOVEFROMCART":
        return {...state,cartItems:state.cartItems.filter(item=>item!=action.payload)}
        case "LOGGEDINUSER":
        return {...state,userName:action.payload};
        case "PRODUCTSLOADED":
        return{...state,products:action.payload}

    }
  }

