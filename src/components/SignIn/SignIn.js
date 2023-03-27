/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Navigate } from 'react-router-dom';
import facebookIcon from '../../assets/icons/facebook.png';
import postSignIn from '../../redux/thunks/signInThunk';
import './SignIn.scss';
import useCurrentUser from '../../hooks/hooks';
import getUser from '../../redux/thunks/userThunk';

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const currentUser = useCurrentUser();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    if (loading) {
      return;
    }
    setLoading(true);
    dispatch(postSignIn(user))
      .then(() => {
        setLoading(false);
        dispatch(getUser());
      })
      .catch(() => {
        setLoading(false);
      });
  };
  if (currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div id="sign-in-wrapper">
      <div>
        <p>English</p>
      </div>

      <div id="sign-in-wrapper__body">
        <img
          id="sign-in-wrapper__instagram-logo"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="instagram-logo"
        />
        <button type="button" id="sign-in-wrapper__facebook-button">
          <img src={facebookIcon} alt="facebook" />
          <p>
            <strong>Continue with Facebook</strong>
          </p>
        </button>

        <div id="sign-in-wrapper__or">
          <div />
          <p>OR</p>
          <div />
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Phone number, username, or email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p>Forgot password?</p>
          <button type="submit">
            <strong>Log in</strong>
          </button>
        </form>
        <div id="sign-in-wrapper__sign-up">
          <p>Don&apos;t have an account?</p>
          <NavLink id="link" to="/sign-up">
            <strong>Sign up</strong>
          </NavLink>
        </div>
      </div>

      <div id="sign-in-wrapper__from-meta">
        <img
          alt="from Meta"
          src="https://static.cdninstagram.com/rsrc.php/yb/r/SxCWlJznXoy.svg"
        />
      </div>
    </div>
  );
};

export default SignIn;
