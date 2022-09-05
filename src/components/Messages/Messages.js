/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import hamburgerIcon from '../../assets/icons/hamburger.png';
import './Messages.css';

const Messages = () => {
  useEffect(() => {
    window.scrollTo(20, 0);
  });

  return (
    <div className="messages-section">
      <div className="messages-navigation-bar">
        <div className="messages-title">
          userName
        </div>
        <div className="messages-navigation-links">
          <a href="https://google.com/">🗓️</a>
          <a href="https://google.com/">
            <img className="hamburger-icon" src={hamburgerIcon} alt="hamburger-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Messages;
