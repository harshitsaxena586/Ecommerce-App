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
        case "CARTUPDATE":
        return {...state,cart:action.payload}
        case "DELETEUPDATE":
        return {...state,cart:state.cart.filter(({item})=>item._id!=action.payload)}
        case "LOGGEDINUSER":
        return {...state,userName:action.payload};
        case "PRODUCTSLOADED":
        return{...state,products:action.payload}

    }
  }

