/* eslint-disable linebreak-style */
import React from 'react';
import './Story.scss';

const Story = () => {
  const story = 'Story';
  return (
    <div id="users-story-wrapper">
      <div id="image-wrapper">
        <img alt="user story" />
      </div>
      <p>{story}</p>
    </div>
  );
};

export default Story;
