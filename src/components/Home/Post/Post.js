/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
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
          <div id="image-wrapper">
            <img src={post.post_user.image} alt="user" />
          </div>
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
          <NavLink state={post} to="/comments">
            <img src={commentsIcon} alt="comments-icon" />
          </NavLink>
          <a href="https://google.com/">
            <img src={redirectIcon} alt="redirect-icon" />
          </a>
        </div>

        <div id="favorite">
          <img src={favoriteIcon} alt="favorite-icon" />
        </div>
      </div>

      <div id="user-likes">
        {post.post_likes.length > 0 ? <div>{`${post.post_likes.length} Likes`}</div> : null}
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

      <div id="home-add-comment">
        <img src={post.post_user.image} alt="user" />
        <input type="text" placeholder="Add comment..." />
      </div>

      <div className="time-difference">
        {moment(post.created_at).fromNow(true).replace('hours', 'h')}
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    created_at: PropTypes.string,
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
