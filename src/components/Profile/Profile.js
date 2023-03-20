import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ProfilePost from './ProfilePost/ProfilePost';
import plusIcon from '../../assets/icons/new-post.png';
import addIcon from '../../assets/icons/plus.png';
import hamburgerIcon from '../../assets/icons/hamburger.png';
import './Profile.scss';

const Profile = () => {
  useEffect(() => {
    window.scrollTo(20, 0);
  });

  return (
    <div id="profile-section-wrapper">
      <div id="profile-section-wrapper__navigation">
        <strong>@usertag</strong>
        <div>
          <a href="https://google.com/">
            <img src={plusIcon} alt="plus-icon" />
          </a>
          <a href="https://google.com/">
            <img src={hamburgerIcon} alt="hamburger-icon" />
          </a>
        </div>
      </div>

      <div id="profile-section-wrapper__user-info">
        <div id="profile-section-wrapper__picture-div">
          <img src="" alt="user" />
        </div>

        <div id="profile-section-wrapper__posts-followers-following">
          <div id="profile-section-wrapper__posts-counter">
            <p><strong>74</strong></p>
            <p>Posts</p>
          </div>

          <div id="profile-section-wrapper__followers-counter">
            <p><strong>419</strong></p>
            <p>followers</p>
          </div>

          <div id="profile-section-wrapper__following-counter">
            <p><strong>692</strong></p>
            <p>Following</p>
          </div>
        </div>
      </div>

      <div id="profile-section-wrapper__name-description">
        <div><strong>User name</strong></div>
        <div>Bio description</div>
      </div>

      <div id="profile-section-wrapper__edit-profile">
        <NavLink to="/edit-user">
          <strong>Edit profile</strong>
        </NavLink>
        <NavLink to="/edit-user">
          <strong>Share profile</strong>
        </NavLink>
        <img src={plusIcon} alt="plus-icon" />
      </div>

      <div id="profile-section-wrapper__user-interfaces">
        <p><strong>Story Highlights</strong></p>
        <p>Keep your favorite stories on your profile</p>
        <div id="profile-section-wrapper__highlights">
          <div className="profile-section-wrapper__flex">
            <div className="profile-section-wrapper__add-highlighted-story">
              <img src={addIcon} alt="plus" />
            </div>
            <p>New</p>
          </div>

          <div className="profile-section-wrapper__flex">
            <div className="profile-section-wrapper__highlighted-story" />
          </div>

          <div className="profile-section-wrapper__flex">
            <div className="profile-section-wrapper__highlighted-story" />
          </div>

          <div className="profile-section-wrapper__flex">
            <div className="profile-section-wrapper__highlighted-story" />
          </div>

          <div className="profile-section-wrapper__flex">
            <div className="profile-section-wrapper__highlighted-story" />
          </div>

          <div className="profile-section-wrapper__flex">
            <div className="profile-section-wrapper__highlighted-story" />
          </div>

          <div className="profile-section-wrapper__flex">
            <div className="profile-section-wrapper__highlighted-story" />
          </div>

        </div>
      </div>

      <div id="profile-section-wrapper__interfaces-buttons">
        <div>
          <img src={plusIcon} alt="plus-icon" />
        </div>
        <div>
          <img src={plusIcon} alt="plus-icon" />
        </div>
        <div>
          <img src={plusIcon} alt="plus-icon" />
        </div>
      </div>

      <div id="profile-section-wrapper__profile-posts">
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
        <ProfilePost />
      </div>
    </div>
  );
};

export default Profile;
