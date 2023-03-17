import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import getPosts from '../../redux/thunks/postsThunk';
import searchIcon from '../../assets/icons/search.png';
import loadingGif from '../../assets/gifs/instagram.gif';
import './Explore.scss';

const Explore = () => {
  const loading = useSelector((state) => state.posts.loading);
  const posts = useSelector((state) => state.posts.data);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(20, 0);
    if (!posts.length > 0) {
      dispatch(getPosts());
    }
  });

  return (
    <div id="explore-section-wrapper">
      <div id="explore-navigation-bar">
        <div>
          <img src={searchIcon} alt="home" />
          <input placeholder="Search" />
        </div>
      </div>

      <div id="explore-section-wrapper__posts">
        {loading ? <img id="loading" src={loadingGif} alt="loading" /> : (posts.map((post, index) => (
          <NavLink key={post.id} state={{ index }} to="/explore-feed" className="explore-section-wrapper__navlink">
            <img src={post.image_urls && post.image_urls[0]} alt="explore" />
          </NavLink>
        )))}
      </div>
    </div>
  );
};

export default Explore;
