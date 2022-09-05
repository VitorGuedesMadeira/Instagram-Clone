import React from 'react';
import hamburgerIcon from '../../assets/icons/hamburger.png';
import './Shop.css';

const Shop = () => {
  const userName = 'shop';
  return (
    <div className="shop-section">
      <div className="shop-navigation-bar">
        <div className="shop-title">
          {userName}
        </div>
        <div className="shop-navigation-links">
          <a href="https://google.com/">🗓️</a>
          <a href={userName}>
            <img className="hamburger-icon" src={hamburgerIcon} alt="hamburger-icon" />
          </a>
        </div>
      </div>

      <div className="shop-options">
        <input className="shop-search-bar" placeholder="🔍 Search shops" />
        <div className="shop-userinterfaces-buttons">
          <div className="shop-userinterface-button">Shops</div>
          <div className="shop-userinterface-button">Videos</div>
          <div className="shop-userinterface-button">Editor&apos;s picks</div>
          <div className="shop-userinterface-button">Collection</div>
        </div>
      </div>

      <div className="shop-userinterfaces">
        <div className="shop-userinterface">shopImage</div>
        <div className="shop-userinterface">shopImage</div>
        <div className="shop-userinterface">shopImage</div>
        <div className="shop-userinterface">shopImage</div>
        <div className="shop-userinterface">shopImage</div>
        <div className="shop-userinterface">shopImage</div>
        <div className="shop-userinterface">shopImage</div>
        <div className="shop-userinterface">shopImage</div>
        <div className="shop-userinterface">shopImage</div>
        <div className="shop-userinterface">shopImage</div>
        <div className="shop-userinterface">shopImage</div>
        <div className="shop-userinterface">shopImage</div>
        <div className="shop-userinterface">shopImage</div>
        <div className="shop-userinterface">shopImage</div>
        <div className="shop-userinterface">shopImage</div>
        <div className="shop-userinterface">shopImage</div>
      </div>
    </div>
  );
};

export default Shop;
