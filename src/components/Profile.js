import React from 'react';
import './Profile.css';

const Profile = () => {
  const userName = 'userName';
  return (
    <div className="profile-section">
      <div className="profile-navigation-bar">
        <div className="profile-username">
          {userName}
        </div>
        <div className="profile-navigation-links">
          <a href="https://google.com/">+</a>
          <a href="https://google.com/">☰</a>
        </div>
      </div>

      <div className="profile-user-picture-info">
        <div className="profile-user-picture">
          userImage
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
    </div>
  );
};

export default Profile;
