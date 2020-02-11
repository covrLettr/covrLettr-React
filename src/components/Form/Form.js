import React from 'react';
import InputForm from '../InputForm/InputForm';
import SubmitButton from '../SubmitButton/SubmitButton.js'; 
import questions from  '../../questions.js';
import styles from './Form.css';

const Form = () => {
  const inputFormElements = questions.map(({ nameOfQuestion, question, placeholder }, i) => (
    <InputForm key={i} nameOfQuestion={nameOfQuestion} question={question} placeholder={placeholder} />
  ));

  return (
    <form className={styles.Form}>
      {inputFormElements}
      <aside>
        <SubmitButton />
      </aside>
    </form>
  );
    
};


export default Form;
