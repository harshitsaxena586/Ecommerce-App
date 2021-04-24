import react, { useState } from "react";

export default function ProductFilter({
  src,
  title,
  price,
  highlights,
  wishlist
}) {
  const [inputPrice, setInputPice] = useState(150);
  return (
    <div className="filter-wrap">
      <div className="price-filter">
      {console.log(inputPrice)}
      <h1>Price Range</h1>
        <input
          type="range"
          min="2"
          max="150"
          step="4"
          onChange={(e) => setInputPice(() => e.target.value)}
        />
      </div>
      <div className="categories-filter">
        <label for="cabinet">
          <input type="radio" id="cabinet" name="categories" value="huey" />{" "}
          <span className="category-text">Cabinets</span>{" "}
        </label>

        <label>
          {" "}
          <input type="radio" id="huey" name="categories" value="huey" />{" "}
          <span className="category-text">Graphics Card</span>{" "}
        </label>

        <label>
          <input type="radio" id="huey" name="categories" value="huey" />
          <span className="category-text">Proccessor</span>{" "}
        </label>

        <label>
          {" "}
          <input type="radio" id="huey" name="categories" value="huey" />{" "}
          <span className="category-text">Storage</span>
        </label>

        <label>
          {" "}
          <input type="radio" id="huey" name="categories" value="huey" />{" "}
          <span className="category-text"> AIO</span>
        </label>
      </div>
    </div>
  );
}
