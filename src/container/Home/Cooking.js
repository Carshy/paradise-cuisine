/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchRecipes } from '../../redux/slices/recipesSlice';
import { images } from '../../constants';
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
      <div className="app__cooking-container">
        <div className="app__cooking-right">
          <img
            className="cooking-img"
            src={images.weeknight}
            alt="weeknight"
          />
        </div>
        <div className="app__cooking-left">
          <p>Expert Advice</p>
          <h2>For the Glossiest, Sauciest Sheet-Pan Chicken, Grab a Jar of Jam</h2>
          <p>
            With the help of soy sauce, Dijon mustard, and vinegar, a jar of apricot
            jam transforms chicken legs into a gorgeous weeknight dinner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cooking;
