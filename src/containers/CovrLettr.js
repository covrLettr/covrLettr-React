import React, { useState, useEffect } from 'react';
import Form from '../components/Form/Form';
import styles from './CovrLettr.css';
import { post } from '../../src/components/services/request';
import { useSessionUser } from '../components/hooks/auth';
import { verifyAuth } from '../components/services/authApi';
import { useHistory } from 'react-router-dom';


const CovrLettr = () => {
  const user = useSessionUser();
  const [userAnswers, setUserAnswers] = useState();
  const [coverLetter, setCoverLetter] = useState();
  const [toggle, setToggle] = useState(false);
  const history = useHistory();

  useEffect(() => {
    verifyAuth()
      .then(user => {
        console.log(user);
      })
      .catch(() => {
        history.push('/userauth');
      });
  }, []);

  const handleChange = ({ target }) => {
    return setUserAnswers(prevState => ({
      ...prevState,
      userId: user._id,
      sincerely: 'Sincerely',
      greeting: 'Dear',
      pronoun: 'he/him',
      [target.name]: target.value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    if(Object.keys(userAnswers).length === 39) {
      post('/userAnswers', userAnswers)
        .then(userAnswers => {
          post('/coverLetters', { 'userAnswerId': userAnswers._id }, true)
            .then(theLetter => setCoverLetter(theLetter));
        });
      setToggle(!toggle);
    } else {
      alert('It seems you missed something.  Please make sure all questions are answered.');
    }
  };

  const generateNew = event => {
    event.preventDefault();
    post('/userAnswers', userAnswers)
      .then(userAnswers => {
        post('/coverLetters', {
          'userAnswerId': userAnswers._id
        }, true)
          .then(theLetter => {
            setCoverLetter(theLetter);
          });
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
