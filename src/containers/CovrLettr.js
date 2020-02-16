import React, { useState, useEffect } from 'react';
import Form from '../components/Form/Form';
import styles from './CovrLettr.css';
import { useSessionUser } from '../components/hooks/auth';


const CovrLettr = () => {
  const user = useSessionUser();
  const [userAnswers, setUserAnswers] = useState({ userId: null });

  useEffect(() => {
    console.log(user);
    // setUserAnswers({
    //   userId: user._id
    // });
  });

  const handleChange = ({ target }) => {
    return setUserAnswers({ [target.name]: target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    


    console.log(user);
    
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
