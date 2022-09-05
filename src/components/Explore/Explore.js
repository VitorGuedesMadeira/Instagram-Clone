import React, { useEffect } from 'react';
import searchIcon from '../../assets/icons/search.png';
import './Explore.css';

const Explore = () => {
  useEffect(() => {
    window.scrollTo(20, 0);
  });

  return (
    <div className="explore-section">
      <div className="explore-navigation-bar">
        <img className="search-icon" src={searchIcon} alt="home" />
        <input className="explore-search-bar" placeholder="Search" />
      </div>

      <div className="explore-posts">
        <div className="explore-image">exploreImage</div>
        <div className="explore-image">exploreImage</div>
        <div className="explore-image">exploreImage</div>
        <div className="explore-image">exploreImage</div>
        <div className="explore-image">exploreImage</div>
        <div className="explore-image">exploreImage</div>
        <div className="explore-image">exploreImage</div>
        <div className="explore-image">exploreImage</div>
        <div className="explore-image">exploreImage</div>
        <div className="explore-image">exploreImage</div>
        <div className="explore-image">exploreImage</div>
        <div className="explore-image">exploreImage</div>
        <div className="explore-image">exploreImage</div>
        <div className="explore-image">exploreImage</div>
        <div className="explore-image">exploreImage</div>
        <div className="explore-image">exploreImage</div>
        <div className="explore-image">exploreImage</div>
        <div className="explore-image">exploreImage</div>
        <div className="explore-image">exploreImage</div>
        <div className="explore-image">exploreImage</div>
        <div className="explore-image">exploreImage</div>
      </div>
    </div>
  );
};

export default Explore;
