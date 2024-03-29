/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { fetchCategoryNames, loadCategories, updateCategoriesLoaded } from '../../redux/actions/actionCreate';
import HomeRow from './HomeRow';
import './Home.scss';

const Home = () => {
  const dispatch = useDispatch();

  const [categoryNamesLoaded, setCategoryNamesLoaded] = useState(false);

  const categories = useSelector((state) => state.categories);
  const appState = useSelector((state) => state.appState);

  useEffect(() => {
    if (appState.categoriesLoaded) return;

    if (!categoryNamesLoaded) {
      dispatch(fetchCategoryNames());
      setCategoryNamesLoaded(true);
    }
    if (categories.length) {
      dispatch(loadCategories(categories));
      dispatch(updateCategoriesLoaded());
    }
  }, [appState.categoriesLoaded, categories, categoryNamesLoaded, dispatch]);

  return (
    <div>
      <div className="app__home">
        {categories.map((category) => (
          <HomeRow key={v4()} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Home;
