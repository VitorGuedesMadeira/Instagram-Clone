/* eslint-disable linebreak-style */
import React from 'react';
import './Story.css';

const Story = () => {
  const story = 'Story';
  return (
    <div className="individual-story">
      <div className="individual-story-image">
        {story}
      </div>
      <p>randomStory</p>
    </div>
  );
};

export default Story;
