/* eslint-disable linebreak-style */
import React from 'react';
import likeIcon from '../../../assets/icons/like.png';
import commentsIcon from '../../../assets/icons/comment.png';
import redirectIcon from '../../../assets/icons/direct.png';
import favoriteIcon from '../../../assets/icons/favorite.png';
import moreIcon from '../../../assets/icons/more.png';
import './Post.scss';

const Post = () => {
  const profile = 'postPicture';
  return (
    <div id="user-post-wrapper">
      <div id="user-top-bar">
        <div id="user-info">
          <div id="user-picture" />
          <div id="user-name">userName</div>
        </div>
        <div id="user-post-options">
          <img src={moreIcon} alt="more" />
        </div>
      </div>

      <div id="user-post-picture">
        {profile}
      </div>

      <div id="user-down-bar">
        <div id="likes-comments-redirect">
          <a href="https://google.com/">
            <img src={likeIcon} alt="like-icon" />
          </a>
          <a href="https://google.com/">
            <img src={commentsIcon} alt="comments-icon" />
          </a>
          <a href="https://google.com/">
            <img src={redirectIcon} alt="redirect-icon" />
          </a>
        </div>

        <div id="favorite">
          <img src={favoriteIcon} alt="favorite-icon" />
        </div>
      </div>

      <div id="user-likes">
        <div>♥️</div>
        <div>532 Likes</div>
      </div>

      <div id="user-name-subtitle">
        <div><strong>userName</strong></div>
        <div>Post subtitle 😄</div>
      </div>
    </div>
  );
};

export default Post;
