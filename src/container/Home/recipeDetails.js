import React from 'react';
import { useLocation } from 'react-router-dom';
import './RecipeDetails.scss';

const RecipeDetails = () => {
  const location = useLocation();
  const recipe = location.state; // retrieve the recipe data fromthe state

  if (!recipe) return <div>No Recipe Data found!</div>;

  // Split the details text into paragraphs
  const paragraphs = recipe.details.split('\n\n');

  return (
    <div className="app__recipedetails">
      <h1 className="details-title">{recipe.title}</h1>
      <div className="details-img">
        <img className="image-field" src={recipe.photo} alt="recipe pic" />
      </div>
      <div className="details-content">
        <p className="details-excerpt">{recipe.excerpt}</p>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="details-para">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default RecipeDetails;
