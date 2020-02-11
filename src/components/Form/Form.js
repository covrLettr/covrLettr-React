import React from 'react';
import InputForm from '../InputForm/InputForm';
import PropTypes from 'prop-types';
import questions from  '../../questions.js';
import styles from './Form.css';

const Form = ({ onSubmit }) => {
  const inputFormElements = questions.map(({ nameOfQuestion, question, placeholder }, i) => (
    <InputForm key={i} nameOfQuestion={nameOfQuestion} question={question} placeholder={placeholder} />
  ));

  return (
    <form className={styles.Form}>
      {inputFormElements}
      <button className={styles.Form} onSubmit={onSubmit} >Create 
    Covr Lettr</button>
    </form>
  );
    
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
//sd

export default Form;
