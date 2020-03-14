import React, { useState } from 'react';
import Form from '../components/Form/Form';
import styles from './CovrLettr.css';
import { post } from '../../src/components/services/request';
import { useSessionUser } from '../components/hooks/auth';


const CovrLettr = () => {
  const user = useSessionUser();
  const [userAnswers, setUserAnswers] = useState();
  const [coverLetter, setCoverLetter] = useState();
  const [toggle, setToggle] = useState(false);

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
      .then(userAnswers => {
        post('/coverLetters', { 'userAnswerId': userAnswers._id }, true)
          .then(theLetter => setCoverLetter(theLetter));
      });
    setToggle(!toggle);
  };

  const generateNew = event => {
    event.preventDefault();
    post('/userAnswers', userAnswers)
      .then(userAnswers => {
        post('/coverLetters', {
          'userAnswerId': userAnswers._id
        }, true)
          .then(theLetter => setCoverLetter(theLetter));
      });
  };

  return (
    <>
      {!toggle && <main className={styles.Main}>
        <div>
          <Form handleSubmit={handleSubmit} handleChange={handleChange} />
        </div>
      </main>}
      {toggle && <main className={styles.Main}>
        <div>
          <p>{coverLetter}</p>
          <button onClick={() => setToggle(!toggle)}>Change Answers</button>
          <button onClick={generateNew}>Generate Another!</button>
        </div>
      </main>}
    </>
  );
};
export default CovrLettr;
