import React from 'react';
import Form from '../components/Form/Form';
// import HeroImage from '../components/HeroImage/HeroImage';
import styles from './CovrLettr.css';
import SignUpForm from '../components/LogUpS/SignUp';

const CovrLettr = () => (
  <main className={styles.Main}>
    <div>
      <Form />
    </div>
    <SignUpForm />
  </main>
)
;

export default CovrLettr;
