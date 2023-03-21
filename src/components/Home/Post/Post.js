/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import likeIcon from '../../../assets/icons/like.png';
import commentsIcon from '../../../assets/icons/comment.png';
import redirectIcon from '../../../assets/icons/direct.png';
import favoriteIcon from '../../../assets/icons/favorite.png';
import moreIcon from '../../../assets/icons/more.png';
import newComment from '../../../redux/thunks/newCommentThunk';
import './Post.scss';

const Post = (props) => {
  const [selectedText, setSelectedText] = useState('');
  const { post } = props;
  const { id } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      text: selectedText,
      post_id: post.id,
      user_id: 1,
    };
    dispatch(newComment(body));
    navigate('/comments', { state: post });
  };

  return (
    <div id={id} className="user-post-wrapper">
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

      <div className="user-post-div">
        {post.image_urls && post.image_urls.map((photo, index) => (
          <div key={photo} className="user-post-picture-wrapper">
            <img
              className="user-post-picture"
              src={photo}
              alt="post"
            />
            {post.image_urls.length > 1 ? (
              <p className="user-post-picture-counter">
                {index + 1}
                /
                {post.image_urls.length}
              </p>
            ) : null}
          </div>
        ))}
      </div>

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

      {post.post_likes.length > 0
        ? (
          <div id="user-likes">
            <div>
              {`${post.post_likes.length} Likes`}
            </div>
          </div>
        )
        : null}

      <div id="user-name-subtitle">
        <p>
          <span><strong>{post.post_user.username}</strong></span>
          <span>{' '}</span>
          <span>{post.title}</span>
        </p>
      </div>

      {post.post_comments.length > 0
        ? (
          <div id="view-all-comments">
            <NavLink state={post} to="/comments">
              View all
              {' '}
              {post.post_comments.length}
              {' '}
              comments
            </NavLink>
          </div>
        )
        : null}

      <div id="home-add-comment">
        <img src={post.post_user.image} alt="user" />
        <form onSubmit={handleSubmit}>
          <input type="text" value={selectedText} onChange={(e) => setSelectedText(e.target.value)} placeholder="Add a comment..." />
          <button type="submit" />
        </form>
      </div>

      <div className="time-difference">
        {moment(post.created_at).fromNow(true).replace('hours', 'hours ago').replace('day', 'day ago')
          .replace('minutes', 'minutes ago')
          .replace('days', 'days ago')}
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
      username: PropTypes.string,
    }),
    image_urls: PropTypes.shape([PropTypes.string]),
    post_likes: PropTypes.shape([]),
    post_comments: PropTypes.shape([]),
    title: PropTypes.string,
  }).isRequired,
  id: PropTypes.number.isRequired,
};

export default Post;
