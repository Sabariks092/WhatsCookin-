import React from 'react';
import RecipeCard from './RecipeCard';
import "../styles/components/RecipeList.css"

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal} // Use a unique key for each card
          id={recipe.idMeal}
          title={recipe.strMeal}
          image={recipe.strMealThumb}
          category={recipe.strCategory}
        />
      ))}
    </div>
  );
};

export default RecipeList;
