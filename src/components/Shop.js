import React from 'react';
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
          <a href="https://google.com/">☰</a>
        </div>
      </div>
    </div>
  );
};

export default Shop;
