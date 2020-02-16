import React, { useState } from 'react';
import Form from '../components/Form/Form';
import styles from './CovrLettr.css';
import get from '../components/services/request';

const CovrLettr = () => {
  const [userAnswers, setUserAnswers] = useState({});

  const handleChange = ({ target }) => {
    return setUserAnswers({ [target.name]: target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    console.log('pooooooooop');
    
  };

  return (
    <main className={styles.Main}>
      <div>
        <Form handleSubmit={handleSubmit} handleChange={handleChange} />
      </div>
    </main>
  );
};
export default CovrLettr;
