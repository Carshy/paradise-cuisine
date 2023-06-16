/* eslint-disable max-len */
// import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import { HiMenuAlt4, HiX } from 'react-icons/hi';
// import './Nav.scss';

// const Nav = () => {
//   const [fix, setFix] = useState(false);
//   const [toggle, setToggle] = useState(false);

//   useEffect(() => {
//     const navScroll = () => {
//       setFix(window.scrollY >= 2);
//     };

//     window.addEventListener('scroll', navScroll);

//     return () => {
//       window.removeEventListener('scroll', navScroll);
//     };
//   }, []);

//   return (
//     <div className="nav-section">
//       <nav className={fix ? 'navbar fixed' : 'navbar'}>
//         <NavLink to="/" className="nav-link">
//           <span className="text-logo">Paradise Cuisine</span>
//         </NavLink>
//         <ul className="nav-group">
//           <li>
//             <NavLink to="/" exact className="nav-item">
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/ingredients" className="nav-item">
//               Ingredients
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/areas" className="nav-item">
//               Areas
//             </NavLink>
//           </li>
//         </ul>

//         <div className="app__navbar-menu">
//           <HiMenuAlt4 onClick={() => setToggle(true)} />

//           {toggle && (
//             <div>
//               <HiX onClick={() => setToggle(false)} />
//               <ul className="nav-group">
//                 <li>
//                   <NavLink to="/" onClick={() => setToggle(false)} className="nav-item">
//                     Home
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/ingredients" onClick={() => setToggle(false)} className="nav-item">
//                     Ingredients
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/areas" onClick={() => setToggle(false)} className="nav-item">
//                     Areas
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Nav;

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { VscMenu } from 'react-icons/vsc';
import { AiOutlineClose } from 'react-icons/ai';
import './Nav.scss';

const Nav = ({ mediaWidth }) => {
  const [navActive, setNavActive] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="nav">
      <div
        className="nav__logo"
        onClick={() => {
          navigate('/');
        }}
      >
        <h2 className="nav__logoImg">
          {mediaWidth > 700 && <p>Paradise Cuisine</p>}
        </h2>
      </div>
      {mediaWidth <= 500 && (
        <VscMenu
          className="nav__toggleOpen"
          onClick={() => {
            setNavActive(true);
          }}
        />
      )}
      <nav
        className={navActive ? 'nav__menu active' : 'nav__menu'}
        aria-roledescription="main navigation"
      >
        <ul className="nav__links">
          <NavLink to="/" onClick={() => setNavActive(false)}>Home</NavLink>
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
