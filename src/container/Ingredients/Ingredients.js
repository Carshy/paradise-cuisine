/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
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

  const navigate = useNavigate;
  const dispatch = useDispatch();

  const appState = useSelector((state) => state.appState);
  const { mealListLoaded } = useSelector((state) => state.appState);
  let ingredients = useSelector((state) => state.ingredients);

  const outlet = useOutlet();

  useEffect(() => {
    if (appState.ingredientsLoaded) return;
    dispatch(fetchIngredients());
    dispatch(updateIngredientsLoaded());
  }, [dispatch, appState.ingredientsLoaded]);

  ingredients = ingredients.filter((ingredient) =>
    ingredient.name.toLowerCase().includes(searchValue.toLowerCase()));

  const ingredientsStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '.5em',
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
            ingredients.map((ingredient) => (
              <span
                key={v4()}
                className="ingredient"
                onClick={() => {
                  if (
                    formatString(ingredient.name) !==
                    (mealListLoaded.name && currentPageIng)
                  ) {
                    dispatch(clearMealList());
                    dispatch(
                      updateMealListLoaded({
                        name: formatString(ingredient.name),
                        base: 'i',
                      }),
                    );
                    setCurrentPageIng(formatString(ingredient.name));
                    navigate(`./${formatString(ingredient.name)}`);
                  }
                }}
              >
                {ingredient.name}
              </span>
            ))}

          {searchValue.length <= 0 && (
            <h3
              style={{ textAlign: 'center', width: '100%', color: '#543a0d' }}
            >
              Please input at least a letter to search
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
  mediaWidth: PropTypes.string,
}.isRequired;

export default Ingredients;
