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
    </div>
  );
};

export default Profile;
