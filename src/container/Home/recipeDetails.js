import React from 'react';
import { useLocation } from 'react-router-dom';
import './RecipeDetails.scss';

const RecipeDetails = () => {
  const location = useLocation();
  const recipe = location.state; // retrieve the recipe data fromthe state

  if (!recipe) return <div>No Recipe Data found!</div>;
  return (
    <div className="app__recipedetails">
      <h1>{recipe.title}</h1>
      <div className="details-img">
        <img className="image-field" src={recipe.photo} alt="recipe pic" />
      </div>
      <div className="details-content">
        <p className="details-excerpt">{recipe.excerpt}</p>
        <p className="details-para">{recipe.details}</p>
      </div>
    </div>
  );
};

export default RecipeDetails;
