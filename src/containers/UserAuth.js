import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../components/Login/Login';
import SignUpForm from '../components/LogUpS/SignUp';

export default function UserAuth() {
  const [user, setUser] = useState({});


  const handleSubmit = event => {
    event.PreventDefault();

  };
  return (
    <>
      <LoginForm />
      <SignUpForm />
    </>
  );
}

UserAuth.propTypes = {
  user: PropTypes.object.isRequired
};
