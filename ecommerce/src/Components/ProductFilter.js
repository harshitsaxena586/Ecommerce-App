import { useEffect, useState } from "react";
import { useApp } from "../Context/AppContextProvider";

export default function ProductFilter() {
  // ------ data sorting---------
  const getSordtedData = (productList, sortby) => {
    if (sortby && sortby === "LOWtoHIGH") {
      return [...productList].sort((a, b) => a.price - b.price);
    }

    if (sortby && sortby === "HIGHtoLOW") {
      return [...productList].sort((a, b) => b.price - a.price);
    }
  };
  // Data filter
  const getFilteredData = (productList, category) => {
    if (state.category === null && state.sortby != null) {
      return productList;
    }

    return productList.filter((item) => item.type == category);
  };
  const { state, dispatch } = useApp();

  const sortedData = getSordtedData(state.products, state.sortby);
  const filteredData = getFilteredData(
    sortedData == null ? state.products : sortedData,
    state.category
  );

  useEffect(() => dispatch({ type: "FILTERAPPLIED", payload: filteredData }), [
    state.sortby,
    state.category
  ]);

  function categoryLabel(tag, name) {
    return (
      <label>
        {" "}
        <input
          type="radio"
          name="categories"
          onChange={() => dispatch({ type: "category-filter", payload: tag })}
        />{" "}
        <span className="category-text"> {name}</span>
      </label>
    );
  }
  return (
    <div className="filter-wrap">
      {/* ----------Sorting ----------- */}
      <div className="sorting-products">
        <h1>Sort by</h1>
        <label>
          <input
            type="radio"
            name="sort"
            onChange={() => dispatch({ type: "SORT", payload: "LOWtoHIGH" })}
          />{" "}
          <span className="sorting-text">Low to High</span>
        </label>
        <label>
          {" "}
          <input
            type="radio"
            name="sort"
            onChange={() => dispatch({ type: "SORT", payload: "HIGHtoLOW" })}
          />{" "}
          <span className="sorting-text">High To Low</span>
        </label>
      </div>

      <div className="categories-filter">
        <h1>Categories</h1>
        {categoryLabel("case", "Cabinets")}
        {categoryLabel("graphics card", "Graphics Card")}
        {categoryLabel("proccessor", "Proccessor")}
        {categoryLabel("storage", "Storage")}
        {categoryLabel("aio", "AIO")}
      </div>
      <div className="clear" onClick={() => dispatch({ type: "RESETFILTER" })}>
        <h1>Clear 🔄</h1>
      </div>
    </div>
  );
}
