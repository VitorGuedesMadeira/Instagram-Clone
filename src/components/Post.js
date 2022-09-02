/* eslint-disable linebreak-style */
import React from 'react';
import './Post.css';

const Post = () => {
  const profile = 'postPicture';
  return (
    <div className="user-post">
      <div className="user-top-bar">
        <div className="user-info">
          <div className="user-picture" />
          <div className="user-name">userName</div>
        </div>
        <div className="user-post-options">
          ⁞
        </div>
      </div>

      <div className="user-post-picture">
        {profile}
      </div>

      <div className="user-down-bar">
        <div className="likes-comments-redirect">
          <div className="likes-button">❤️</div>
          <div className="comments-button">💬</div>
          <div className="redirect-button">➡️</div>
        </div>
        <div className="favorite">
          🚩
        </div>
      </div>

      <div className="user-likes">
        <div className="likes-image">♥️</div>
        <div className="likes-counter">532 Likes</div>
      </div>

      <div className="user-name-subtitle">
        <div className="user-down-name"><strong>userName</strong></div>
        <div className="user-subtitle">Post subtitle 😄</div>
      </div>
    </div>
  );
};

export default Post;
