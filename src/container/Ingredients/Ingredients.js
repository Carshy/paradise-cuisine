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


const Ingredients = () => {
  return (
    <main className="ingredients">
      
    </main>
  )
};

export default Ingredients;
