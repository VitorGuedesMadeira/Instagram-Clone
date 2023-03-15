/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Story.scss';

const Story = (props) => {
  const { story } = props;
  const { stories } = props;
  const { index } = props;

  return (
    <div id="users-story-wrapper">
      <NavLink className="image-wrapper" state={{ stories, index }} to="/stories">
        <img src={story[0].story_user.image} alt="user story" />
      </NavLink>
      <p>{story[0].story_user.name}</p>
    </div>
  );
};

Story.propTypes = {
  story: PropTypes.shape({
    id: PropTypes.number,
    created_at: PropTypes.string,
    story_user: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
    }),
  }).isRequired,
  stories: PropTypes.shape([]).isRequired,
  index: PropTypes.number.isRequired,
};

export default Story;
