import React, { useEffect } from 'react';
import './Profile.scss';
import ProfilePost from './ProfilePost/ProfilePost';
import plusIcon from '../../assets/icons/new-post.png';
import hamburgerIcon from '../../assets/icons/hamburger.png';

const Profile = () => {
  useEffect(() => {
    window.scrollTo(20, 0);
  });

  return (
    <div id="profile-section-wrapper">
      <div id="profile-section-wrapper__navigation">
        <p>userName</p>
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
            <p>74</p>
            <p>Posts</p>
          </div>

          <div id="profile-section-wrapper__followers-counter">
            <p>419</p>
            <p>followers</p>
          </div>

          <div id="profile-section-wrapper__following-counter">
            <p>692</p>
            <p>Following</p>
          </div>
        </div>
      </div>

      <div id="profile-section-wrapper__name-description">
        <div>userName</div>
        <div>bioDescription</div>
      </div>

      <div id="profile-section-wrapper__edit-profile">
        <div>Edit profile</div>
      </div>

      <div id="profile-section-wrapper__user-interfaces">
        <div>Story Highlights</div>
      </div>

      <div id="profile-section-wrapper__interfaces-buttons">
        <div>Icon1</div>
        <div>Icon2</div>
        <div>Icon3</div>
        <div>Icon4</div>
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
