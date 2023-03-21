import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import backIcon from '../../../assets/icons/angle-left.png';
import getPosts from '../../../redux/thunks/postsThunk';
import Post from '../../Home/Post/Post';
import './ExploreFeed.scss';

const ExploreFeed = () => {
  const posts = useSelector((state) => state.posts.data);
  const location = useLocation();
  const indexLocation = location.state.index;
  const dispatch = useDispatch();

  const slide = () => {
    const mySlide = document.getElementById(indexLocation);
    if (mySlide) {
      mySlide.scrollIntoView({ behavior: 'instant', block: 'start', inline: 'nearest' });
    }
  };

  useEffect(() => {
    slide();
    dispatch(getPosts());
  }, []);

  return (
    <div id="explore-feed-section-wrapper">
      <div id="explore-feed-section-wrapper__navigation">
        <NavLink to="/explore">
          <img src={backIcon} alt="back-icon" />
        </NavLink>
        <div><strong>Posts you may like</strong></div>
        <div />
      </div>

      <div id="explore-feed-section-wrapper__feed">
        {posts.map((post, index) => (
          <Post key={post.id} id={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default ExploreFeed;
