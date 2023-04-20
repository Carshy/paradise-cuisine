import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { useNavigate, useOutlet } from 'react-router-dom';
import {
  clearMealList,
  fetchIngredients,
  updateIngredientsLoaded,
  updateMealListLoaded
} from '../../redux/actions/actionCreate';
import { formatString } from '../Utils/Utils';
import './Ingredients.scss';

const Ingredients = ({ mediaWidth }) => {
  const [searchValue, setSearchValue] = useState('');
  const [currentPageIng, setCurrentPageIng] = useState('none');

  const navigate = useNavigate;
  const dispatch = useDispatch();

  const appState = useSelector((state) => state.appState);
  const { mealsLoaded } = useSelector((state) => state.appState);
  let ingredients = useSelector((state) => state.ingredients);

  const outlet = useOutlet();

  useEffect(() => {
    if (appState.ingredientsLoaded) return;
    dispatch(fetchIngredients());
    dispatch(updateIngredientsLoaded());
  }, [dispatch, appState.ingredientsLoaded]);

  ingredients = ingredients.filter((ingredient) =>
    ingredient.name.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <main className="ingredients">
      
    </main>
  )
};

export default Ingredients;
