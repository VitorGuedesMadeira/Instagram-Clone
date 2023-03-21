import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import getPosts from '../../redux/thunks/postsThunk';
import searchIcon from '../../assets/icons/search.png';
import multipleIcon from '../../assets/icons/multiple.png';
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

  const openSearches = () => {
    const explorePosts = document.querySelector('#explore-section-wrapper__posts');
    const exploreSearches = document.querySelector('#explore-section-wrapper__searches');

    explorePosts.classList.add('hide');
    exploreSearches.classList.add('show');
  };

  return (
    <div id="explore-section-wrapper">
      <div id="explore-navigation-bar">
        <div>
          <img src={searchIcon} alt="home" />
          <input onClick={openSearches} placeholder="Search" />
        </div>
      </div>

      <div id="explore-section-wrapper__posts">
        {loading ? <img id="loading" src={loadingGif} alt="loading" /> : (posts.map((post, index) => (
          <NavLink key={post.id} state={{ index }} to="/explore-feed" className="explore-section-wrapper__navlink">
            <img src={post.image_urls && post.image_urls[0]} alt="explore" />
            {post.image_urls && post.image_urls.length > 1
              ? <img className="multiple-icon" src={multipleIcon} alt="multiple" />
              : null}
          </NavLink>
        )))}
      </div>

      <div id="explore-section-wrapper__searches">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
      </div>
    </div>
  );
};

export default Explore;
