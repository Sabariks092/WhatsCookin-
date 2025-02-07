import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/components/RecipeCard.css";

const RecipeCard = ({ title, image, category, id }) => {
  const navigate = useNavigate();

  const handleSelect = () => {
    console.log("Navigating to recipe with ID:", id); // Debugging step
    navigate(`/recipe/${id}`); // Navigate to RecipeDetails page
  };

  return (
    <div className="recipe-card" onClick={handleSelect}>
      <img src={image} alt={title} className="recipe-card__image" />
      <div className="recipe-card__content">
        <h3>{title}</h3>
        <p>{category}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
