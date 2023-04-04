import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { fetchCategoryNames, loadCategories } from '../../redux/actions/actionCreate';
import HomeRow from './HomeRow';
import './Home.scss';

const Home = () => {
  const dispatch = useDispatch();

  const [categoryNamesLoaded, setCategoryNamesLoaded] = useState(false);
  const [categoriesLoaded, setCategoriesLoaded] = useState(false);

  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    if (!categoryNamesLoaded) {
      dispatch(fetchCategoryNames());
      setCategoryNamesLoaded(true);
    }
  }, [categoryNamesLoaded, dispatch]);

  useEffect(() => {
    if (!categoriesLoaded && categories.length) {
      const shouldLoadCategories = categories.every((category) => category.meals);
      if (shouldLoadCategories) {
        dispatch(loadCategories(categories));
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
