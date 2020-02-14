import React from 'react';
import Form from '../components/Form/Form';
// import HeroImage from '../components/HeroImage/HeroImage';
import styles from './CovrLettr.css';
import SignUpForm from '../components/LogUpS/SignUp';
import LoginForm from '../components/Login/Login';

const CovrLettr = () => (
  <main className={styles.Main}>
    <div>
      <Form />
    </div>
    <LoginForm />
    <SignUpForm />
  </main>
);
export default CovrLettr;
