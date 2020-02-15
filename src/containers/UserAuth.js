import React, { useState } from 'react';
import LoginForm from '../components/Login/Login';
import SignUpForm from '../components/LogUpS/SignUp';
import { useLogin } from '../hooks/auth';
import { useSignup } from '../hooks/auth';

export default function UserAuth() {
  const { signup, authErr } = useSignup();
  const { login, loginAuthErr } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleLoginSubmit = event => {
    event.preventDefault();
    login(email, password);
  };

  const handleSignupSubmit = event => {
    event.preventDefault();
    signup(email, password);
  };

  const handleClick = () => setToggle(!toggle);

  const handleEmailChange = ({ target }) => setEmail(target.value);
  const handlePasswordChange = ({ target }) => setPassword(target.value);

  return (
    <>
      <LoginForm authErr={authErr} handlePasswordChange={handlePasswordChange} handleEmailChange={handleEmailChange} handleLoginSubmit={handleLoginSubmit} handleClick={handleClick} />
      <SignUpForm authErr={loginAuthErr} handlePasswordChange={handlePasswordChange} handleEmailChange={handleEmailChange} handleSignupSubmit={handleSignupSubmit} handleClick={handleClick} />
    </>
  );
}
