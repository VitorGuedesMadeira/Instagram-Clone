import React, { useEffect } from 'react';
import './Profile.css';
import ProfilePost from './ProfilePost/ProfilePost';
import plusIcon from '../../assets/icons/new-post.png';
import hamburgerIcon from '../../assets/icons/hamburger.png';

const Profile = () => {
  useEffect(() => {
    window.scrollTo(20, 0);
  });

  return (
    <div className="profile-section">
      <div className="profile-navigation-bar">
        <div className="profile-username">
          userName
        </div>
        <div className="profile-navigation-links">
          <a href="https://google.com/">
            <img className="plus-icon" src={plusIcon} alt="plus-icon" />
          </a>
          <a href="https://google.com/">
            <img className="hamburger-icon" src={hamburgerIcon} alt="hamburger-icon" />
          </a>
        </div>
      </div>

      <div className="profile-user-picture-info">
        <div className="profile-user-picture-div">
          <div className="profile-user-picture" />
        </div>
        <div className="profile-posts-followers-following">
          <div className="profile-posts-counter">
            <p>74</p>
            <p>Posts</p>
          </div>
          <div className="profile-followers-counter">
            <p>419</p>
            <p>followers</p>
          </div>
          <div className="profile-following-counter">
            <p>692</p>
            <p>Following</p>
          </div>
        </div>
      </div>

      <div className="profile-username-biodescription">
        <div>userName</div>
        <div>bioDescription</div>
      </div>

      <div className="profile-edit-profile-section">
        <div className="edit-profile">Edit profile</div>
      </div>

      <div className="profile-userinterfaces">
        <div className="userinterfaces-title">Story Highlights</div>
      </div>

      <div className="userinterfaces-button">
        <div>Icon1</div>
        <div>Icon2</div>
        <div>Icon3</div>
        <div>Icon4</div>
      </div>

      <div className="profile-posts">
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
