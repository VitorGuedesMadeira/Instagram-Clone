/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import hamburgerIcon from '../../assets/icons/hamburger.png';
import Chat from './Chat/Chat';
import './Messages.scss';

const Messages = () => {
  useEffect(() => {
    window.scrollTo(20, 0);
  });

  return (
    <div id="messages-section-wrapper">

      <div id="messages-section-wrapper__navigation">
        <p>userName</p>

        <div id="messages-section-wrapper__navigation-links">
          <a href="https://google.com/">🗓️</a>
          <a href="https://google.com/">
            <img className="hamburger-icon" src={hamburgerIcon} alt="hamburger-icon" />
          </a>
        </div>
      </div>

      <div id="messages-section-wrapper__interfaces">
        <div>All</div>
        <div>Calls</div>
        <div>Requests</div>
      </div>

      <div id="messages-section-wrapper__search">
        <input placeholder="Search" />
      </div>

      <div id="messages-section-wrapper__individual-chats">
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
      </div>
    </div>
  );
};

export default Messages;
