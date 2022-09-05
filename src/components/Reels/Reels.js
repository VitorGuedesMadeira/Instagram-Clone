import React, { useEffect } from 'react';
import './Reels.css';

const Reels = () => {
  useEffect(() => {
    window.scrollTo(20, 0);
  });

  return (
    <div className="reels-section">
      reels
    </div>
  );
};

export default Reels;
