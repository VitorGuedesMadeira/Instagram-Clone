import React, { useEffect } from 'react';
import './NewPost.scss';

const NewPost = () => {
  useEffect(() => {
    window.scrollTo(20, 0);
  });

  return <div id="new-post-section-wrapper">New post</div>;
};

export default NewPost;
