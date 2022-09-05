import React from 'react';
import { NavLink } from 'react-router-dom';
import homeIcon from '../../assets/icons/home.png';
import searchIcon from '../../assets/icons/search.png';
import reelsIcon from '../../assets/icons/reels.png';
import shopIcon from '../../assets/icons/shop.png';
import userIcon from '../../assets/icons/user.png';
import './Navbar.css';

const Navbar = () => (
  <nav className="navigation-bar">
    <ul className="navigation-ul">
      <li className="navigation-li">
        <NavLink to="/" className="home-navigation-link link">
          <img src={homeIcon} alt="home" />
        </NavLink>
      </li>
      <li className="navigation-li">
        <NavLink to="/explore" className="explore-navigation-link link">
          <img src={searchIcon} alt="home" />
        </NavLink>
      </li>
      <li className="navigation-li">
        <NavLink to="/reels" className="reels-navigation-link link">
          <img src={reelsIcon} alt="reels" />
        </NavLink>
      </li>
      <li className="navigation-li">
        <NavLink to="/shop" className="shop-navigation-link link">
          <img src={shopIcon} alt="shop" />
        </NavLink>
      </li>
      <li className="navigation-li">
        <NavLink to="/profile" className="profile-navigation-link link">
          <img src={userIcon} alt="user" />
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
