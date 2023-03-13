/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import likeIcon from '../../../assets/icons/like.png';
import commentsIcon from '../../../assets/icons/comment.png';
import redirectIcon from '../../../assets/icons/direct.png';
import favoriteIcon from '../../../assets/icons/favorite.png';
import moreIcon from '../../../assets/icons/more.png';
import './Post.scss';

const Post = (props) => {
  const { post } = props;

  return (
    <div id="user-post-wrapper">
      <div id="user-top-bar">
        <div id="user-info">
          <div id="image-wrapper"><img src={post.post_user.image} alt="user" /></div>
          <div id="user-name">{post.post_user.name}</div>
        </div>
        <div id="user-post-options">
          <img src={moreIcon} alt="more" />
        </div>
      </div>

      <img id="user-post-picture" src={post.image_urls[0]} alt="post" />

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
        <div>
          {post.post_likes.length}
          {' '}
          Likes
        </div>
      </div>

      <div id="user-name-subtitle">
        <div>
          <strong>{post.post_user.name}</strong>
        </div>
        <div>{post.title}</div>
      </div>

      <div id="view-all-comments">
        <NavLink state={post} to="/comments">
          View all
          {' '}
          {post.post_comments.length}
          {' '}
          comments
        </NavLink>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    post_user: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
    }),
    image_urls: PropTypes.shape([PropTypes.string]),
    post_likes: PropTypes.shape([]),
    post_comments: PropTypes.shape([]),
    title: PropTypes.string,
  }).isRequired,
};

export default Post;
