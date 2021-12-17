export const reducer = (state, { payload, type }) => {
  switch (type) {
    case "SORT":
      return { ...state, sortby: payload, isFilterApplied: true };
    case "category-filter":
      return { ...state, category: payload, isFilterApplied: true };
    case "FILTERAPPLIED":
      return { ...state, filteredProducts: payload };
    case "RESETFILTER":
      return { ...state, isFilterApplied: false };
    case "CARTUPDATE":
      return { ...state, cart: payload };
    case "DELETEUPDATE":
      return {
        ...state,
        cart: state.cart.filter(({ item }) => item._id != payload),
      };
    case "LOGGEDINUSER":
      return { ...state, userId: payload };
    case "LOGGEDOUTUSER":
      return { ...state, userId: null };
    case "PRODUCTSLOADED":
      return { ...state, products: payload };
    default:
      return state;
  }
};
