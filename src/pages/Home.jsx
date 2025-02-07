
import React, { useEffect, useState } from "react";
import RecipeCard from "../Components/RecipeCard";
import SearchBar from "../Components/SearchBar";
import FilterSection from "../Components/FilterSection"; 
import "../styles/pages/Home.css";
import "../styles/components/SearchBar.css";
import axios from "axios";
import About from "../Components/About";
import Feedback from "../Components/Feedback";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({ category: "", area: "" }); 

  const fetchRecipes = async (query = "", filters = {}) => {
    setLoading(true);
    setError(null);
    try {
      let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

      if (filters.category) {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${filters.category}`;
      } else if (filters.area) {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${filters.area}`;
      }

      const response = await axios.get(url);
      const data = response.data;
      setRecipes(data.meals || []);
    } catch (err) {
      console.error("Error fetching recipes:", err);
      setError("Failed to load recipes. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes("", filters);
  }, [filters]); 

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters); 
  };

  return (
    <div className="home">
      <h1 style={{ textAlign: "center" }}>Welcome to <strong><span style={{color:"red",textShadow:"1px 1px rgb(39,37,36)",}}>Whats Cookin'</span></strong></h1>
      <p className="text-center mb-4">Explore 300+ <strong>Continental</strong> Delicious Recipes. Discover, Cook and Enjoy Your Favorite dishes today ! </p>
      <SearchBar onSearch={fetchRecipes} />
        <FilterSection onFilter={handleFilterChange} />
        
      <div  >
      {loading ? (
        <p>Loading recipes...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : recipes.length > 0 ? (
        <div className="mt-4 recipe-list">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              title={recipe.strMeal}
              image={recipe.strMealThumb}
              category={recipe.strCategory}
              id={recipe.idMeal}
            />
          ))}
        </div>
      ) : (
        <p>No recipes found. Try searching for something else!</p>
      )}
      </div>
      <hr className="mt-5" />
     <div id="about">
     <About/>
     </div>
     <hr />
     <div id="feedback">
     <Feedback/>
     </div>
    </div>
  );
};

export default Home;
