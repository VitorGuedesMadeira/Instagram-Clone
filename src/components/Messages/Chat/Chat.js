/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import './Chat.css';

const Chat = () => {
  useEffect(() => {
    window.scrollTo(20, 0);
  });

  return (
    <div className="chat-section">
      <div className="chat-individual">
        <div className="chat-user" />
        <div className="chat-name-message">
          <p>userName</p>
          <p>Seen 1h ago</p>
        </div>
      </div>
      <div>
        icon
      </div>
    </div>
  );
};

export default Chat;
