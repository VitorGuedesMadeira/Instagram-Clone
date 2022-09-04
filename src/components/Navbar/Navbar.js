import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const instagram = 'HOME';
  return (
    <nav className="navigation-bar">
      <ul className="navigation-ul">
        <li className="navigation-li">
          <NavLink to="/" className="home-navigation-link link">
            {instagram}
          </NavLink>
        </li>
        <li className="navigation-li">
          <NavLink to="/explore" className="explore-navigation-link link">
            EXPLORE
          </NavLink>
        </li>
        <li className="navigation-li">
          <NavLink to="/reels" className="reels-navigation-link link">
            REELS
          </NavLink>
        </li>
        <li className="navigation-li">
          <NavLink to="/shop" className="shop-navigation-link link">
            SHOP
          </NavLink>
        </li>
        <li className="navigation-li">
          <NavLink to="/profile" className="profile-navigation-link link">
            PROFILE
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
