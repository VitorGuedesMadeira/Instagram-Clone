/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
import { isFulfilled } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import backIcon from '../../assets/icons/angle-left.png';
import postSignUp from '../../redux/thunks/signUpThunk';
import './SignUp.scss';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      username,
      password,
    };

    dispatch(postSignUp(user))
      .then((r) => {
        if (isFulfilled(r)) {
          navigate('/sign-in');
        }
        setError(r.error.message);
      })
      .catch((e) => {
        console.error('>>>>>>> error', e);
      });
  };
  return (
    <div id="sign-up-wrapper">
      <div id="sign-up-wrapper__navigation">
        <NavLink id="link" to="/sign-in">
          <img src={backIcon} alt="go back" />
        </NavLink>
      </div>

      <div id="sign-up-wrapper__form-div">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="email address"
            required
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Full name"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
          <input
            type="text"
            placeholder="Username"
            required
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {error && <p>{error}</p>}
          <button type="submit">
            <strong>Register</strong>
          </button>
        </form>
        <p>You may receive SMS notifications from us for security a</p>
      </div>
    </div>
  );
};

export default SignUp;
