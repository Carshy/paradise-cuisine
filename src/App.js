/* eslint-disable arrow-body-style */
import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux';
import Nav from './components/Nav/Nav';
// import store from './redux/configureStore';

const App = () => {
  return (
    // <Provider store={store}>
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          {/* <Route element={<Home />} path="/" /> */}
        </Routes>
      </div>
    </Router>
    // </Provider>
  );
};

export default App;
