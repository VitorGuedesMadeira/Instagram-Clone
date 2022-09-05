/* eslint-disable linebreak-style */
import React from 'react';
import './UserStory.css';

const UserStory = () => {
  const story = 'Story';
  return (
    <div className="user-story">
      <div className="user-story-image">
        {story}
      </div>
      <p>myStory</p>
    </div>
  );
};

export default UserStory;
