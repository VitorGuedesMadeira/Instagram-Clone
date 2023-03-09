import React, { useEffect } from 'react';
import searchIcon from '../../assets/icons/search.png';
import './Explore.scss';

const Explore = () => {
  useEffect(() => {
    window.scrollTo(20, 0);
  });

  return (
    <div id="explore-section-wrapper">
      <div id="explore-navigation-bar">
        <div>
          <img src={searchIcon} alt="home" />
          <input placeholder="Search" />
        </div>
      </div>

      <div id="explore-posts">
        <img src="https://picsum.photos/200" alt="explore" />
        <img src="https://picsum.photos/200" alt="explore" />
        <img src="https://picsum.photos/200" alt="explore" />
        <img src="https://picsum.photos/200" alt="explore" />
        <img src="https://picsum.photos/200" alt="explore" />
        <img src="https://picsum.photos/200" alt="explore" />
        <img src="https://picsum.photos/200" alt="explore" />
        <img src="https://picsum.photos/200" alt="explore" />
        <img src="https://picsum.photos/200" alt="explore" />
        <img src="https://picsum.photos/200" alt="explore" />
        <img src="https://picsum.photos/200" alt="explore" />
        <img src="https://picsum.photos/200" alt="explore" />
        <img src="https://picsum.photos/200" alt="explore" />
        <img src="https://picsum.photos/200" alt="explore" />
        <img src="https://picsum.photos/200" alt="explore" />
        <img src="https://picsum.photos/200" alt="explore" />
        <img src="https://picsum.photos/200" alt="explore" />
        <img src="https://picsum.photos/200" alt="explore" />
        <img src="https://picsum.photos/200" alt="explore" />
        <img src="https://picsum.photos/200" alt="explore" />
        <img src="https://picsum.photos/200" alt="explore" />
        <img src="https://picsum.photos/200" alt="explore" />
        <img src="https://picsum.photos/200" alt="explore" />
        <img src="https://picsum.photos/200" alt="explore" />
        <img src="https://picsum.photos/200" alt="explore" />
        <img src="https://picsum.photos/200" alt="explore" />
        <img src="https://picsum.photos/200" alt="explore" />

      </div>
    </div>
  );
};

export default Explore;
