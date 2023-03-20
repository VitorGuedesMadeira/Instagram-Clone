import React from 'react';
import { NavLink } from 'react-router-dom';
import facebookIcon from '../../assets/icons/facebook.png';
import './SignIn.scss';

const SignIn = () => (
  <div id="sign-in-wrapper">
    <div>
      <p>English</p>
    </div>

    <div id="sign-in-wrapper__body">
      <img id="sign-in-wrapper__instagram-logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="instagram-logo" />
      <button type="button" id="sign-in-wrapper__facebook-button">
        <img src={facebookIcon} alt="facebook" />
        <p><strong>Continue with Facebook</strong></p>
      </button>

      <div id="sign-in-wrapper__or">
        <div />
        <p>OR</p>
        <div />
      </div>

      <form>
        <input type="text" placeholder="Phone number, username, or email" />
        <input type="password" placeholder="Password" />
        <p>Forgot password?</p>
        <button type="submit"><strong>Log in</strong></button>
      </form>
      <div id="sign-in-wrapper__sign-up">
        <p>Don&apos;t have an account?</p>
        <NavLink id="link" to="/sign-up">
          <strong>Sign up</strong>
        </NavLink>
      </div>
    </div>

    <div id="sign-in-wrapper__from-meta">
      <img alt="from Meta" src="https://static.cdninstagram.com/rsrc.php/yb/r/SxCWlJznXoy.svg" />
    </div>
  </div>
);

export default SignIn;
