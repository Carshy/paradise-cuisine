import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import arrow2 from '../images/arrow2.PNG';
import arrow3 from '../images/arrow3.PNG';

function Header() {
  return (
    <div>
      <nav className="navigation-section">
        <Link className="nav-link" to="/">
          <img src={arrow2} alt="Back Arrow" />
          <h1>Home</h1>
        </Link>
        <ul className="nav-group">
          <li>
            <a href="/" className="nav-item">
              Animals
            </a>
          </li>
          <li>
            <a href="/" className="nav-items">
              <img src={arrow3} alt="settings" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
