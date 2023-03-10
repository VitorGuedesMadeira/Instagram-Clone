import React, { useEffect } from 'react';
import hamburgerIcon from '../../assets/icons/hamburger.png';
import './Shop.scss';

const Shop = () => {
  useEffect(() => {
    window.scrollTo(20, 0);
  });

  return (
    <div id="shop-section-wrapper">
      <div id="shop-section-wrapper__navigation">
        <p>shop</p>
        <div>
          <a href="https://google.com/">🗓️</a>
          <a href="https://google.com/">
            <img src={hamburgerIcon} alt="hamburger-icon" />
          </a>
        </div>
      </div>

      <div id="shop-section-wrapper__options">
        <input placeholder="🔍 Search shops" />
        <div>
          <div>Shops</div>
          <div>Videos</div>
          <div>Editor&apos;s picks</div>
          <div>Collection</div>
        </div>
      </div>

      <div id="shop-section-wrapper__interfaces">
        <img src="https://picsum.photos/200" alt="shop" />
        <img src="https://picsum.photos/200" alt="shop" />
        <img src="https://picsum.photos/200" alt="shop" />
        <img src="https://picsum.photos/200" alt="shop" />
        <img src="https://picsum.photos/200" alt="shop" />
        <img src="https://picsum.photos/200" alt="shop" />
        <img src="https://picsum.photos/200" alt="shop" />
        <img src="https://picsum.photos/200" alt="shop" />
        <img src="https://picsum.photos/200" alt="shop" />
        <img src="https://picsum.photos/200" alt="shop" />
        <img src="https://picsum.photos/200" alt="shop" />
        <img src="https://picsum.photos/200" alt="shop" />
        <img src="https://picsum.photos/200" alt="shop" />
        <img src="https://picsum.photos/200" alt="shop" />
        <img src="https://picsum.photos/200" alt="shop" />
        <img src="https://picsum.photos/200" alt="shop" />
      </div>
    </div>
  );
};

export default Shop;
