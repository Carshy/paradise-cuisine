/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchRecipes } from '../../redux/slices/recipesSlice';
// import { images } from '../../constants';
import './Cooking.scss';

const Cooking = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const recipes = useSelector((state) => state.recipes.recipes); // Get recipes from Redux
  const loading = useSelector((state) => state.recipes.loading); // Get Loading state
  const error = useSelector((state) => state.recipes.error); // Get error state

  useEffect(() => {
    dispatch(fetchRecipes()); // fetch recipes when Cooking component mounts
  }, [dispatch]);

  if (loading) return <div>Loading...</div>; // Display Loadig message
  if (error) return <div>Error: {error}</div>; // Display Error Message

  const handleRecipeClick = (recipe) => {
    navigate(`/recipe/${recipe.id}`, { state: recipe }); // pass recipe data to the details page
  };
  return (
    <div className="app__cooking">
      <div className="cooking-title-div">
        <h1 className="cooking-title">WEEKNIGHT COOKING</h1>
      </div>
      {
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="app__cooking-container"
            role="button"
            tabIndex={0}
            onClick={() => handleRecipeClick(recipe)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleRecipeClick(recipe);
              }
            }}
            style={{ cursor: 'pointer' }}
          >
            <div className="app__cooking-right">
              <img
                className="cooking-img"
                src={recipe.photo}
                alt="weeknight"
              />
            </div>
            <div className="app__cooking-left">
              <p>Expert Advice</p>
              <h2>{recipe.title}</h2>
              <p>
                {recipe.excerpt}
              </p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Cooking;
