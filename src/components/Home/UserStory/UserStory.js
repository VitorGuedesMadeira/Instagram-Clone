/* eslint-disable linebreak-style */
import React from 'react';
import './UserStory.scss';

const UserStory = () => {
  const story = 'Story';
  return (
    <div id="user-story-wrapper">
      <img alt="user story"/>
      <p>{story}</p>
    </div>
  );
};

export default UserStory;
