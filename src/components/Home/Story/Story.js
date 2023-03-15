/* eslint-disable linebreak-style */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Story.scss';

const Story = (props) => {
  const { story } = props;
  console.log(story);

  return (
    <div id="users-story-wrapper">
      <NavLink className="image-wrapper" state={story} to="/stories">
        <img src={story.story_user.image} alt="user story" />
      </NavLink>
      <p>{story.story_user.name}</p>
    </div>
  );
};

export default Story;
