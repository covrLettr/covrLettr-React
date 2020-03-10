import React, { useState } from 'react';
import Form from '../components/Form/Form';
import styles from './CovrLettr.css';
import { post } from '../../src/components/services/request';
import { useSessionUser } from '../components/hooks/auth';


const CovrLettr = () => {
  const user = useSessionUser();
  const [userAnswers, setUserAnswers] = useState();

  const handleChange = ({ target }) => {
    return setUserAnswers(prevState => ({
      ...prevState,
      userId: user._id,
      [target.name]: target.value 
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    post('/userAnswers', userAnswers)
      .then(userAnswers => post('/coverLetters', { 'userAnswerId': userAnswers._id }))
      .then(coverLetter => console.log(coverLetter));
    console.log({ USER: user, USERANSWERS: userAnswers });
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
