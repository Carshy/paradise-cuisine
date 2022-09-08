import React from 'react';
import './Header.css';

function Header() {
  return (
    <div>
      <nav className="navigation-section">
        <a className="nav-link" href="/">
          <h1>Home</h1>
        </a>
        <ul className="nav-group">
          <li>
            <a href="/" className="nav-item">
              Animals
            </a>
          </li>
          <li>
            <a href="/" className="nav-item">
              Missions
            </a>
          </li>
          <li>
            <a href="/" className="nav-item">
              My Profile
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
