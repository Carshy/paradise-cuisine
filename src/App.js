import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Animals from './components/Animals/Animals';
import Header from './components/Header/Header';
import Dropdown from './components/Animals/Dropdown';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Dropdown />
        <Animals />
      </div>
    </Provider>
  );
}

export default App;
