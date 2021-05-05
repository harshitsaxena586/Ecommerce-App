import { useEffect, useState } from "react";
import { useApp } from "../context/App-context";

export default function ProductFilter() {
    
    // ------ data sorting---------
      const getSordtedData =(productList,sortby)=>{
          if(sortby && sortby==="LOWtoHIGH"){
          return ([...productList].sort((a,b)=>a.price -b.price))
          }
  
          if(sortby && sortby==="HIGHtoLOW"){
              return ([...productList].sort((a,b)=>b.price -a.price))
          }
    }
    // Data filter 
      const getFilteredData =(productList,category)=>{
        if(state.category===null && state.sortby!=null){
          return productList
        }
        
        return productList.filter(item=>item.type == category)
    }
const {state,dispatch}=useApp()
console.log(state)



  const sortedData = getSordtedData(state.products,state.sortby)
  const filteredData = getFilteredData(sortedData ==null?state.products:sortedData,state.category)
      // console.log(filteredData)

      useEffect(()=>dispatch({type:"FILTERAPPLIED",payload:filteredData}),[state.sortby,state.category])
  return (
        <div className="filter-wrap" >

          {/* ----------Sorting ----------- */}
          <div className="sorting-products">
            <h1>
              Sort by 
            </h1>
            <label><input type="radio" name="sort" onChange={()=>dispatch({type:"SORT",payload:"LOWtoHIGH"})}/> <span className="sorting-text">Low to High</span>
            </label>
            <label> <input type="radio" name="sort" onChange={()=>dispatch({type:"SORT",payload:"HIGHtoLOW"})}/> <span className="sorting-text">High To Low</span>
            </label>
          </div>
    
          
          <div className="categories-filter">
          <h1>
              Categories
          </h1>
              <label for="cabinet">
              <input type="radio" id="cabinet" name="categories" 
              onChange={()=>dispatch({type:"category-filter",payload:"case"})} />{" "}
              <span className="category-text">Cabinets</span>{" "}
            </label>
    
            <label>
              {" "}
              <input type="radio" id="huey" name="categories" onChange={()=>dispatch({type:"category-filter",payload:"graphics card"})} />{" "}
              <span className="category-text">Graphics Card</span>{" "}
            </label>
    
            <label>
              <input type="radio" id="proccessor" name="categories" onChange={()=>dispatch({type:"category-filter",payload:"proccessor"})} />
              <span className="category-text">Proccessor</span>{" "}
            </label>
    
            <label>
              {" "}
              <input type="radio" id="huey" name="categories" onChange={()=>dispatch({type:"category-filter",payload:"storage"})} />{" "}
              <span className="category-text">Storage</span>
            </label>
    
            <label>
              {" "}
              <input type="radio" id="huey" name="categories" onChange={()=>dispatch({type:"category-filter",payload:"aio"})} />{" "}
              <span className="category-text"> AIO</span>
            </label>
          </div>
          <div className="clear" onClick={()=>dispatch({type:"RESETFILTER"})}>
            <h1>
            Clear 🔄

            </h1>
          </div>
        </div>
      );
    }
    