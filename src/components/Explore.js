import React from 'react';
import './Explore.css';

const Explore = () => {
  const explore = 'exploreImage';
  return (
    <div className="explore-section">
      <div className="explore-navigation-bar">
        <input className="explore-search-bar" placeholder="🔍 Search" />
      </div>

      <div className="explore-posts">
        <div className="explore-image">{explore}</div>
        <div className="explore-image">{explore}</div>
        <div className="explore-image">{explore}</div>
        <div className="explore-image">{explore}</div>
        <div className="explore-image">{explore}</div>
        <div className="explore-image">{explore}</div>
        <div className="explore-image">{explore}</div>
        <div className="explore-image">{explore}</div>
        <div className="explore-image">{explore}</div>
        <div className="explore-image">{explore}</div>
        <div className="explore-image">{explore}</div>
        <div className="explore-image">{explore}</div>
        <div className="explore-image">{explore}</div>
        <div className="explore-image">{explore}</div>
        <div className="explore-image">{explore}</div>
        <div className="explore-image">{explore}</div>
        <div className="explore-image">{explore}</div>
        <div className="explore-image">{explore}</div>
        <div className="explore-image">{explore}</div>
        <div className="explore-image">{explore}</div>
        <div className="explore-image">{explore}</div>
      </div>
    </div>
  );
};

export default Explore;
