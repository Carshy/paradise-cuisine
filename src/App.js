import React, { useState, useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './container/Home/Home';
import HomePage from './container/Home/HomePage';
import Nav from './components/Nav/Nav';
import Ingredients from './container/Ingredients/Ingredients';
import MealList from './container/Meal/MealList';
import Meal from './container/Meal/Meal';
import RecipeDetails from './container/Home/recipeDetails';
import Areas from './container/Areas/Areas';
import store from './redux/configureStore';

const App = () => {
  const [mediaWidth, setMediaWidth] = useState(0);
  window.addEventListener('resize', () => {
    setMediaWidth(window.innerWidth);
  });

  useEffect(() => {
    setMediaWidth(window.innerWidth);
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Nav mediaWidth={mediaWidth} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/meals" element={<Home />} />
            <Route path="/ingredients" element={<Ingredients mediaWidth={mediaWidth} />} />
            <Route path="/ingredients/:ingredient" element={<MealList />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/areas/:area" element={<MealList />} />
            <Route path="/meal/:meal" element={<Meal />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
