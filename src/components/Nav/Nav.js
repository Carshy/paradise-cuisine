/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { VscMenu } from 'react-icons/vsc';
import { AiOutlineClose } from 'react-icons/ai';
import './Nav.scss';

const Nav = ({ mediaWidth }) => {
  const [navActive, setNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div
        className="nav__logo"
        onClick={() => navigate('/')}
      >
        <h2 className="nav__logoImg">
          {mediaWidth > 700 && <p>Cuisine Delight</p>}
        </h2>
      </div>
      {mediaWidth <= 500 && (
        <VscMenu
          className="nav__toggleOpen"
          onClick={() => setNavActive(true)}
        />
      )}
      <nav
        className={navActive ? 'nav__menu active' : 'nav__menu'}
        aria-roledescription="main navigation"
      >
        <ul className="nav__links">
          <NavLink to="/" onClick={() => setNavActive(false)}>Home</NavLink>
          <NavLink to="/meals" onClick={() => setNavActive(false)}>Meals</NavLink>
          <NavLink to="/ingredients" onClick={() => setNavActive(false)}>Ingredients</NavLink>
          <NavLink to="/areas" onClick={() => setNavActive(false)}>Areas</NavLink>
        </ul>
        {mediaWidth <= 500 && (
          <AiOutlineClose
            className="nav__toggleClose"
            onClick={() => setNavActive(false)}
          />
        )}
      </nav>
    </header>
  );
};

Nav.propTypes = {
  mediaWidth: PropTypes.number.isRequired,
};

export default Nav;
