import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { fetchCategoryNames, loadCategories, updateCategoriesLoaded } from '../../redux/actions/actionCreate';
import HomeRow from './HomeRow';
import './Home.scss';

const Home = () => {
  const dispatch = useDispatch();

  const [categoryNamesLoaded, setCategoryNamesLoaded] = useState(false);
  const [categoriesLoaded, setCategoriesLoaded] = useState(false);

  const categories = useSelector((state) => state.categories);
  const appState = useSelector((state) => state.appState);
  console.log(appState);

  useEffect(() => {
    if (appState.categoriesLoaded) return;

    if (!categoryNamesLoaded) {
      dispatch(fetchCategoryNames());
      setCategoryNamesLoaded(true);
    }
  }, [appState, categoriesLoaded, categoryNamesLoaded, dispatch]);

  useEffect(() => {
    if (!categoriesLoaded && categories.length) {
      const shouldLoadCategories = categories.every((category) => category.meals);
      if (shouldLoadCategories) {
        dispatch(loadCategories(categories));
        dispatch(updateCategoriesLoaded());
        setCategoriesLoaded(true);
      }
    }
  }, [categories, categoriesLoaded, dispatch]);
  return (
    <div className="app__home">
      {categories.map((category) => (
        <HomeRow key={v4()} category={category} />
      ))}
    </div>
  );
};

export default Home;
