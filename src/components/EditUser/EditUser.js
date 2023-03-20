import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './EditUser.scss';

const EditUser = () => {
  useEffect(() => {
    window.scrollTo(20, 0);
  });

  return (
    <div id="edit-user-wrapper">
      <div id="edit-user-wrapper__navigation">
        <NavLink to="/">
          <p><strong>Cancel</strong></p>
        </NavLink>
        <p><strong>Edit profile</strong></p>
        <p><strong>Done</strong></p>
      </div>

    </div>
  );
};

export default EditUser;
