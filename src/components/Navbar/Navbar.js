import React from 'react';
import { NavLink } from 'react-router-dom';
import homeIcon from '../../assets/icons/home.png';
import searchIcon from '../../assets/icons/search.png';
import reelsIcon from '../../assets/icons/reels.png';
import plusIcon from '../../assets/icons/new-post.png';
import userIcon from '../../assets/icons/user.png';
import './Navbar.scss';

const Navbar = () => (
  <nav id="navigation-bar-wrapper">
    <ul>
      <li>
        <NavLink to="/" className="link">
          <img src={homeIcon} alt="home" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/explore" className="link">
          <img src={searchIcon} alt="home" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="link">
          <img src={plusIcon} alt="plus-icon" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/reels" className="link">
          <img src={reelsIcon} alt="reels" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" className="link">
          <img src={userIcon} alt="user" />
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
