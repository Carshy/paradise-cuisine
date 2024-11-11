/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchRecipes } from '../../redux/slices/recipesSlice';
import './Cookings.scss';

const Cookings = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const recipes = useSelector((state) => state.recipes.recipes); // Get recipes from Redux
  const loading = useSelector((state) => state.recipes.loading); // Get Loading state
  const error = useSelector((state) => state.recipes.error); // Get error state

  useEffect(() => {
    dispatch(fetchRecipes()); // fetch recipes when Cooking component mounts
  }, [dispatch]);

  if (loading) return <div>Loading...</div>; // Display Loading message
  if (error) return <div>Error: {error}</div>; // Display Error Message

  const handleRecipeClick = (recipe) => {
    navigate(`/recipe/${recipe.id}`, { state: recipe }); // pass recipe data to the details page
  };

  return (
    <div className="app__cookings">
      <div className="cookings-title-div">
        <h1 className="cookings-title">
          Easy recipes for breakfast, lunch, dinner, and beyond.
        </h1>
      </div>
      <div className="app__cookings-row">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="app__cookings-container"
            role="button"
            tabIndex={0}
            onClick={() => handleRecipeClick(recipe)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleRecipeClick(recipe);
              }
            }}
          >
            <div className="app__cookings-details">
              <div className="app__cookings-img">
                <img
                  className="cookings-img"
                  src={recipe.photo}
                  alt={recipe.title}
                />
              </div>
              <div className="app__cookings-info">
                <h2>{recipe.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cookings;
