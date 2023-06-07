/* eslint-disable max-len */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useOutlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  clearMealList,
  fetchIngredients,
  updateIngredientsLoaded,
  updateMealListLoaded,
} from '../../redux/actions/actionCreate';
import { formatString } from '../Utils/Utils';
import './Ingredients.scss';

const Ingredients = ({ mediaWidth }) => {
  const [searchValue, setSearchValue] = useState('');
  const [currentPageIng, setCurrentPageIng] = useState('none');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const appState = useSelector((state) => state.appState);
  const ingredients = useSelector((state) => state.ingredients);

  const outlet = useOutlet();

  useEffect(() => {
    if (appState.ingredientsLoaded) return;
    dispatch(fetchIngredients());
    dispatch(updateIngredientsLoaded());
  }, [dispatch, appState.ingredientsLoaded]);

  const ingredientsStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '.8em',
  };

  const handleIngredientClick = (ingredient) => {
    console.log('Clicked on Ingredient:', ingredient);
    if (formatString(ingredient.name) !== (appState.mealListLoaded.name || currentPageIng)) {
      dispatch(clearMealList());
      dispatch(updateMealListLoaded({
        name: formatString(ingredient.name),
        base: 'i',
      }));
      setCurrentPageIng(formatString(ingredient.name));
      navigate(`./${formatString(ingredient.name)}`);
    }
  };

  return (
    <main className="ingredients">
      <section className="ingredients__col1" style={mediaWidth > 700 ? { width: '50%' } : { flex: '1' }}>
        <div className="ingredients__header">
          <input
            type="text"
            placeholder="Search meals by ingredient..."
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
        </div>

        <div className="ingredients__container" style={ingredientsStyles}>
          {searchValue.length > 0 &&
            ingredients.filter((ingredient) => ingredient.name.toLowerCase().includes(searchValue.toLowerCase()))
              .map((ingredient) => (
                <span
                  key={uuidv4()}
                  className="ingredient"
                  onClick={() => handleIngredientClick(ingredient)}
                >
                  {ingredient.name}
                </span>
              ))}

          {searchValue.length <= 0 && (
            <h3 style={{ textAlign: 'center', width: '100%', color: '#3e5c1c' }}>
              Input a letter in the search field to find your meal
              <br />
              ...Then click on a searched ingredient
            </h3>
          )}
        </div>
      </section>

      {mediaWidth > 700 && (
        <section className="ingredients__col2" style={{ width: '50%' }}>
          {outlet || (
            <h2>
              Click a searched ingredient to display more information about it.
            </h2>
          )}
        </section>
      )}
    </main>
  );
};

Ingredients.propTypes = {
  mediaWidth: PropTypes.number.isRequired,
};

export default Ingredients;
