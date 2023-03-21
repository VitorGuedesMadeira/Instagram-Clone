import React from 'react';
import { NavLink } from 'react-router-dom';
import backIcon from '../../assets/icons/angle-left.png';
import './SignUp.scss';

const SignUp = () => (
  <div id="sign-up-wrapper">
    <div id="sign-up-wrapper__navigation">
      <NavLink id="link" to="/sign-in">
        <img src={backIcon} alt="go back" />
      </NavLink>
    </div>

    <div id="sign-up-wrapper__form-div">
      <form>
        <input type="text" placeholder="Full name" required />
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Password confirmation" required />
        <button type="button">
          <strong>Register</strong>
        </button>
      </form>
      <p>You may receive SMS notifications from us for security a</p>
    </div>
  </div>
);

export default SignUp;
