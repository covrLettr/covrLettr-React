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
    <section className={styles.Form}>
      <form onSubmit={onSubmit}>
        {inputFormElements}
<<<<<<< HEAD
        <input type="reset"  name="ResetButton" value="Reset"></input>
        <button> Create </button>
=======
        <button onSubmit={onSubmit} > Create </button>
        <input type="reset" className="reset" name="ResetButton" value="Reset"></input>
>>>>>>> d8455da4f27e79a59b35cb52c4c9d85ec353dd23
      </form>
    </section>
  );
    
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Form;

