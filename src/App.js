import React, { useState, useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Nav from './components/Nav/Nav';
import Home from './container/Home/Home';
import MealList from './container/Meal/MealList';
import Meal from './container/Meal/Meal';
import Ingredients from './container/Ingredients/Ingredients';
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
            <Route element={<Home />} path="/" />
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
