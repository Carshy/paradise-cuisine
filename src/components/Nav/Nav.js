import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Nav.scss';

const Nav = () => {
  const [fix, setFix] = useState(false);
  const [toggle, setToggle] = useState(false);

  function navScroll() {
    if (window.scrollY >= 2) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener('scroll', navScroll);
  return (
    <div className="nav-section">
      <nav className={fix ? 'navbar fixed' : 'navbar'}>
        <NavLink className="nav-link" to="/">
          <span className="text-logo">Home-Delicacy Cuisine</span>
        </NavLink>
        <ul className="nav-group">
          <li>
            <NavLink to="/" className="nav-item">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/ingredients" className="nav-item">
              Ingredients
            </NavLink>
          </li>
          <li>
            <NavLink to="/areas" className="nav-item">
              Areas
            </NavLink>
          </li>
        </ul>

        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeInOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className="nav-group">
              <li>
                <NavLink to="/" onClick={() => setToggle(false)} className="nav-item">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/ingredients" onClick={() => setToggle(false)} className="nav-item">
                  Ingredients
                </NavLink>
              </li>
              <li>
                <NavLink to="/areas" onClick={() => setToggle(false)} className="nav-item">
                  Areas
                </NavLink>
              </li>
            </ul>

          </motion.div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
