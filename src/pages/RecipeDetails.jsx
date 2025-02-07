import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "../styles/pages/RecipeDetails.css";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRecipeDetails = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log("Fetching recipe with ID:", id);
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      console.log(response.data);
      const data = response.data;

      if (data.meals && data.meals.length > 0) {
        setRecipe(data.meals[0]);
      } else {
        setError("Recipe not found.");
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching recipe details:", error);
      setError("Error fetching recipe details. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchRecipeDetails();
    } else {
      setError("Invalid ID.");
    }
  }, [id]);

  if (loading) {
    return <p>Loading recipe details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!recipe) {
    return <p>No recipe found with the provided ID.</p>;
  }

  return (
    <div className="container text-white recipe-details">
      <h1>{recipe.strMeal}</h1>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="img-fluid rounded"
            style={{height:"80vh"}}
          />
        </div>
        <div className="col-md-6 text-white">
          <p>
            <strong>Category:</strong> {recipe.strCategory}
          </p>
          <p>
            <strong>Area:</strong> {recipe.strArea}
          </p>
          <h3>Ingredients:</h3>
          <ul>
            {Array.from({ length: 20 }).map((_, i) => {
              const ingredient = recipe[`strIngredient${i + 1}`];
              const measure = recipe[`strMeasure${i + 1}`];
              return ingredient ? (
                <li key={i}>
                  {ingredient} - {measure}
                </li>
              ) : null;
            })}
          </ul>
          <p>
            <strong>Instructions:</strong>
          </p>
          <p>{recipe.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
