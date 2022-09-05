/* eslint-disable linebreak-style */
import React from 'react';
import likeIcon from '../../../assets/icons/like.png';
import commentsIcon from '../../../assets/icons/comment.png';
import redirectIcon from '../../../assets/icons/direct.png';
import favoriteIcon from '../../../assets/icons/favorite.png';
import moreIcon from '../../../assets/icons/more.png';
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
          <img className="more-button" src={moreIcon} alt="more" />
        </div>
      </div>

      <div className="user-post-picture">
        {profile}
      </div>

      <div className="user-down-bar">
        <div className="likes-comments-redirect">
          <a href="https://google.com/">
            <img className="likes-button" src={likeIcon} alt="like-icon" />
          </a>
          <a href="https://google.com/">
            <img className="comments-button" src={commentsIcon} alt="comments-icon" />
          </a>
          <a href="https://google.com/">
            <img className="redirect-button" src={redirectIcon} alt="redirect-icon" />
          </a>
        </div>
        <div className="favorite">
          <img className="favorite-button" src={favoriteIcon} alt="favorite-icon" />
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
