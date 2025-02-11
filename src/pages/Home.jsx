
import React, { useEffect, useState } from "react";
import RecipeCard from "../Components/RecipeCard";
import SearchBar from "../Components/SearchBar";
import FilterSection from "../Components/FilterSection";
import "../styles/pages/Home.css";
import "../styles/components/SearchBar.css";
import axios from "axios";
import About from "../Components/About";
import Feedback from "../Components/Feedback";
import sound from "../assets/What.mp3";

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

  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(sound));

  const handlePlayPause = () => {
    if (isPlaying) {
      audio.pause(); // Pause the audio
    } else {
      audio.play(); // Play the audio
    }
    setIsPlaying(!isPlaying); // Toggle play/pause state
  };

  return (
    <div className="home">

      <h1 style={{ textAlign: "center" }}>Welcome to <strong><span style={{ color: "red", textShadow: "1px 1px rgb(39,37,36)", }}>Whats Cookin'</span></strong></h1>
      {/* MP3 Player in the center */}
      <div className="d-flex justify-content-center align-items-center mt-2 w-100 my-2">

        {/* Play/Pause button styled with icons */}
        <div className="d-flex gap-2 justify-content-center align-items-center mt- w-100 my-2">
          <h3 className="mt-1">Lets Cook! </h3>
          <button
            onClick={handlePlayPause}
            style={{
              backgroundColor: "rgb(29, 28, 28)",
              border: "1px solid ",
              padding: "12px 20px",
              color: "white",
              borderRadius: "50%",
              boxShadow:"1px 1px 8px 3px red",
              cursor: "pointer",
              fontSize: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px", // Set a specific width
              height: "40px", // Set a specific height
            }}
          >
            <i
              className={`bi ${isPlaying ? "bi-pause-circle-fill" : "bi-play-circle-fill"}`}
              style={{
                fontSize: "2rem", // Adjust icon size
              }}
            ></i>
          </button>
        </div>

      </div>
      <p className="text-center mt-2 mb-4">Explore 300+ <strong>Continental</strong> Delicious Recipes. Discover, Cook and Enjoy Your Favorite dishes today ! </p>
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
        <About />
      </div>
      <hr />
      <div id="feedback">
        <Feedback />
      </div>
    </div>
  );
};

export default Home;
