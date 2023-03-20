/* eslint-disable linebreak-style */
import React from 'react';
import { NavLink } from 'react-router-dom';
import crossIcon from '../../../../assets/icons/cross.png';
import cameraIcon from '../../../../assets/icons/camera.png';
import multipleIcon from '../../../../assets/icons/multiple.png';
import angleDownIcon from '../../../../assets/icons/angle-down.png';
import settingsIcon from '../../../../assets/icons/settings.png';
import story1 from '../../../../assets/images/story1.jpg';
import story2 from '../../../../assets/images/story2.jpg';
import story3 from '../../../../assets/images/story3.jpg';
import story4 from '../../../../assets/images/story4.jpg';
import story5 from '../../../../assets/images/story5.jpg';
import story6 from '../../../../assets/images/story6.jpg';
import story7 from '../../../../assets/images/story7.jpg';
import './NewStory.scss';

const NewStory = () => (
  <div id="new-story-wrapper">
    <div id="new-story-wrapper__navigation">
      <NavLink to="/">
        <img id="close" src={crossIcon} alt="close icon" />
      </NavLink>
      <p><strong>Add to story</strong></p>
      <button type="button">
        <img id="settings" src={settingsIcon} alt="settings" />
      </button>
    </div>

    <div id="new-story-wrapper__selection">
      <div id="new-story-wrapper__options">
        <div id="new-story-wrapper__select-file">
          <p><strong>Select a file</strong></p>
          <img src={angleDownIcon} alt="angle down" />
        </div>

        <div id="new-story-wrapper__icons">
          <img src={multipleIcon} alt="multiple selection" />
          <p>Select</p>
        </div>
      </div>

      <div id="new-story-wrapper__image-options">
        <div id="new-story-wrapper__select-option">
          <img src={cameraIcon} alt="select option" />
          <p>Camera</p>
        </div>

        <NavLink className="links" to="/post-story" state={story1}>
          <img src={story1} alt="option" />
        </NavLink>

        <NavLink className="links" to="/post-story" state={story2}>
          <img src={story2} alt="option" />
        </NavLink>

        <NavLink className="links" to="/post-story" state={story3}>
          <img src={story3} alt="option" />
        </NavLink>

        <NavLink className="links" to="/post-story" state={story4}>
          <img src={story4} alt="option" />
        </NavLink>

        <NavLink className="links" to="/post-story" state={story5}>
          <img src={story5} alt="option" />
        </NavLink>

        <NavLink className="links" to="/post-story" state={story6}>
          <img src={story6} alt="option" />
        </NavLink>

        <NavLink className="links" to="/post-story" state={story7}>
          <img src={story7} alt="option" />
        </NavLink>

        <NavLink className="links" to="/post-story" state={story1}>
          <img src={story1} alt="option" />
        </NavLink>

        <NavLink className="links" to="/post-story" state={story2}>
          <img src={story2} alt="option" />
        </NavLink>
      </div>
    </div>
  </div>
);

export default NewStory;
