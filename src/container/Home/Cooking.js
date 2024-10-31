import React from 'react';
import { images } from '../../constants';
import './Cooking.scss';

const Cooking = () => {
  const cook = 'WEEKNIGHT COOKING';
  return (
    <div className="app__cooking">
      <h1 className="cooking-title">{cook}</h1>
      <div className="app__cooking-container">
        <div className="app__cooking-right">
          <img className="cooking-img" src={images.weeknight} alt="weeknight" />
        </div>
        <div className="app__cooking-left">
          <p>Expert Advice</p>
          <h2>For the Glossiest, Sauciest Sheet-Pan Chicken, Grab a Jar of Jam</h2>
          <p>
            With the help of soy sauce, Dijon mustard, and vinegar, a jar of apricot
            jam transforms chicken legs into a gorgeous weeknight dinner.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cooking
