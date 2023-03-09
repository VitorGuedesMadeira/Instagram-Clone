import React, { useEffect } from 'react';
import './Reels.scss';

const Reels = () => {
  useEffect(() => {
    window.scrollTo(20, 0);
  });

  return (
    <div id="reels-section-wrapper">
      reels
    </div>
  );
};

export default Reels;
