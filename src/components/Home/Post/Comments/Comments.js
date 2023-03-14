/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import directIcon from '../../../../assets/icons/direct.png';
import backIcon from '../../../../assets/icons/back.png';
import newComment from '../../../../redux/thunks/newCommentThunk';
import getPost from '../../../../redux/thunks/postThunk';
import './Comments.scss';

const Comments = () => {
  const singlePost = useSelector((state) => state.post.data);
  const location = useLocation();
  const post = location.state;
  const dispatch = useDispatch();

  const [selectedText, setSelectedText] = useState('');

  useEffect(() => {
    window.scrollTo(20, 0);
    dispatch(getPost(post.id));
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

  console.log(singlePost);

  return (
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

        <div id="comments-wrapper__post-title">
          <img src={post.post_user.image} alt="user" />
          <div className="comments-wrapper__information">
            <div>
              <p>{post.post_user.name}</p>
              <small>22m</small>
            </div>
            <p>{post.title}</p>
          </div>
        </div>

        {post.post_comments.map((comment) => (
          <div key={comment.id}>
            <div className="comments-wrapper__comment">
              <div className="comments-wrapper__flex">
                <img src={comment.user.image} alt="user" />
                <div className="comments-wrapper__information">
                  <div className="comments-wrapper__gap">
                    <p>{comment.user.name}</p>
                    <small>22m</small>
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
  );
};

export default Comments;
