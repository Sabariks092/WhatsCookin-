import React, { useState } from "react";
import "../styles/components/FilterSection.css"; 

const FilterSection = ({ onFilter }) => {
  const [category, setCategory] = useState("");
  const [area, setArea] = useState("");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleAreaChange = (e) => {
    setArea(e.target.value);
  };

  const handleApplyFilters = () => {
    onFilter({ category, area });
  };

  return (
    <>
    <div  className="filter-section py-2 justify-items-center mx-auto align-items-center row d-flex">
      <div className="filter-group col-md-5 text-dark">
        <select style={{color:"white"}} id="category" value={category} onChange={handleCategoryChange}>
          <option style={{color:"white"}} value="">All Categories</option>
          <option style={{color:"white"}} value="Vegetarian">Vegetarian</option>
          <option style={{color:"white"}} value="Vegan">Vegan</option>  
          <option style={{color:"white"}} value="Breakfast">Breakfast</option>
          <option style={{color:"white"}} value="Side">Side</option>
          <option style={{color:"white"}} value="Starter">Starter</option>
          <option style={{color:"white"}} value="Dessert">Dessert</option>
          <option style={{color:"white"}} value="Chicken">Chicken</option>
          <option style={{color:"white"}} value="Beef">Beef</option>
          <option style={{color:"white"}} value="Pork">Pork</option>
          <option style={{color:"white"}} value="Lamb">Lamb</option>
          <option style={{color:"white"}} value="Pork">Seafood</option>
          <option style={{color:"white"}} value="Pork">Pasta</option>
        </select>
      </div>

      <div className="filter-group col-md-5">
        <select id="area" style={{color:"white"}} value={area} onChange={handleAreaChange}>
          <option style={{color:"white"}} value="">All Areas</option>
          <option style={{color:"white"}} value="British">British</option>
          <option style={{color:"white"}} value="Canadian">Canadian</option>
          <option style={{color:"white"}} value="Chinese">Chinese</option>
        </select>
      </div>

      <div className="col-md-2">
      <button onClick={handleApplyFilters}>Apply Filters</button>
      </div>
    </div>
    </>
  );
};

export default FilterSection;
