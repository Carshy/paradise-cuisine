import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './redux/configureStore';
import Animals from './components/Animals/Animals';
import AnimalDetails from './components/Animals/AnimalDetails';
import Header from './components/Header/Header';
// import Dropdown from './components/Animals/Dropdown';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route element={<Animals />} path="/" />
            <Route element={<AnimalDetails />} path="/details/:id" />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
