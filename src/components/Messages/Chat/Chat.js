/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import './Chat.scss';

const Chat = () => {
  useEffect(() => {
    window.scrollTo(20, 0);
  });

  return (
    <div id="chat-wrapper">
      <div id="chat-wrapper__user">
        <div id="chat-wrapper__user-image">
          <img src="" alt="user" />
        </div>
        <div id="chat-wrapper__user-info">
          <p>userName</p>
          <p>Seen 1h ago</p>
        </div>
      </div>

      <div id="chat-wrapper__icon">
        icon
      </div>
    </div>
  );
};

export default Chat;
