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
      <h5 className="text-center">
        ({recipe.strArea})
      </h5>
      <hr />
      <div className="row">
        <div className="col-md-6 mb-3 d-flex align-items-center justify-content-center">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="img-fluid rounded-4"
            style={{ height: "60vh",border:"1px solid",boxShadow:"2px 2px 8px red" }}
          />
        </div>
        <div className="col-md-6 row align-items-center">
          <div className="col-md-6 text-white justify-content-center">

            <h5>Ingredients :</h5>
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
          </div>
        </div>
        <hr />
        <div className="text-center">
          <h5 >
            <strong>Instructions:</strong>
          </h5>
          <p>{recipe.strInstructions}</p>
        
         </div>
         <p className="text-center"> ( Video Reference : <a href={recipe.strYoutube} style={{color:"red"}} className="text-center">Watch on Youtube</a> )</p>
      </div>
    </div>
  );
};

export default RecipeDetails;
