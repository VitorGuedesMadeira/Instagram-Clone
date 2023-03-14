/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import directIcon from '../../../../assets/icons/direct.png';
import backIcon from '../../../../assets/icons/back.png';
import newComment from '../../../../redux/thunks/newCommentThunk';
import getPost from '../../../../redux/thunks/postThunk';
import './Comments.scss';

const Comments = () => {
  const post = useSelector((state) => state.post.data);
  const loading = useSelector((state) => state.post.loading);
  const location = useLocation();
  const postID = location.state.id;
  const dispatch = useDispatch();

  const [selectedText, setSelectedText] = useState('');

  useEffect(() => {
    window.scrollTo(20, 0);
    dispatch(getPost(postID));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      text: selectedText,
      post_id: post.id,
      user_id: 1,
    };
    dispatch(newComment(body));
    window.location.reload();
  };

  const selectEmoji = (e) => {
    const text = document.querySelector('#form-input');
    text.value += e.target.innerHTML;
  };

  const toggleVisibility = (e) => {
    e.target.parentElement.classList.toggle('hide');
    e.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.toggle('show');
  };

  return (
    <>
      <div id="comments-wrapper">
        <div>
          <div id="comments-wrapper__navigation">
            <div>
              <NavLink to="/">
                <img src={backIcon} alt="back" />
              </NavLink>
              <p>Comments</p>
            </div>
            <img src={directIcon} alt="direct" />
          </div>

          {loading ? 'loading' : (
            <>
              <div id="comments-wrapper__post-title">
                {post.post_user && (
                <img src={post.post_user.image} alt="user" />
                )}
                <div className="comments-wrapper__information">
                  <div>
                    {post.post_user && (
                    <p>{post.post_user.name}</p>)}
                    <small>{moment(post.created_at).fromNow(true).replace('hours', 'h').replace('minutes', 'min')}</small>
                  </div>
                  <p>{post && post.title}</p>
                </div>
              </div>

              {post.post_comments && post.post_comments.map((comment) => (
                <div key={comment.id}>
                  <div className="comments-wrapper__comment">
                    <div className="comments-wrapper__flex">
                      <img src={comment.user.image} alt="user" />
                      <div className="comments-wrapper__information">
                        <div className="comments-wrapper__gap">
                          <p>{comment.user.name}</p>
                          <small>{moment(comment.created_at).fromNow(true).replace('hours', 'h').replace('minutes', 'min')}</small>
                        </div>
                        <p>{comment.text}</p>
                        <div className="comments-wrapper__flex">
                          {comment.comment_likes.length > 0
                            ? (
                              <small>
                                {comment.comment_likes.length}
                                {' '}
                                likes
                              </small>
                            )
                            : null}
                          <small>Reply</small>
                          <small>See translation</small>
                        </div>
                        {comment.comment_replies.length > 0
                          ? (
                            <button type="button" className="comments-wrapper__show-replies" onClick={toggleVisibility}>
                              <span className="first-span" />
                              <span>View</span>
                              <span>{comment.comment_replies.length}</span>
                              <span>more replies</span>
                            </button>
                          )
                          : null}
                      </div>
                    </div>

                    <div className="comments-wrapper__likes">
                      {comment.comment_likes.length > 0
                        ? <p>❤️</p>
                        : <p>🤍</p>}
                    </div>
                  </div>

                  <div className="comments-wrapper__hidden-replies">
                    {comment.comment_replies.map((reply) => (
                      <div key={reply.id} className="comments-wrapper__reply">
                        <div className="comments-wrapper__reply-flex">
                          <img src={reply.user.image} alt="reply user" />
                          <div className="comments-wrapper__reply-information">
                            <div className="comments-wrapper__reply-gap">
                              <p>{reply.user.name}</p>
                              <small>22m</small>
                            </div>
                            <p>{reply.text}</p>
                            <div className="comments-wrapper__reply-flex">
                              {comment.comment_likes.length > 0
                                ? (
                                  <small>
                                    {comment.comment_likes.length}
                                    {' '}
                                    likes
                                  </small>
                                )
                                : null}
                              <small>Reply</small>
                            </div>
                          </div>
                        </div>

                        <div className="comments-wrapper__likes">
                          {comment.comment_likes.length > 0
                            ? <p>❤️</p>
                            : <p>🤍</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        <div id="comments-wrapper__add-comment">
          <div id="comments-wrapper__emojis">
            <button type="button" onClick={selectEmoji}>😀</button>
            <button type="button" onClick={selectEmoji}>🥰</button>
            <button type="button" onClick={selectEmoji}>😂</button>
            <button type="button" onClick={selectEmoji}>👏🏼</button>
            <button type="button" onClick={selectEmoji}>🙏🏼</button>
            <button type="button" onClick={selectEmoji}>❤️</button>
            <button type="button" onClick={selectEmoji}>😡</button>
            <button type="button" onClick={selectEmoji}>🔥</button>
          </div>
          <div id="comments-wrapper__form">
            <img src="" alt="user" />
            <form onSubmit={handleSubmit}>
              <input id="form-input" type="text" value={selectedText} onChange={(e) => setSelectedText(e.target.value)} placeholder="Add a comment..." />
              <button type="submit">post</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

Comments.propTypes = {
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

export default Comments;
