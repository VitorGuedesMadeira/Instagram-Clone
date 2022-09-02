import React from 'react';
import './Explore.css';

const Explore = () => {
  const explore = 'explore';
  return (
    <div className="explore-section">
      <div className="explore-navigation-bar">
        <input className="explore-search-bar" placeholder="🔍 Search" />
      </div>
      {explore}
    </div>
  );
};

export default Explore;
