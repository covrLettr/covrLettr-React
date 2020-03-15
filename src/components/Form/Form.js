import React from 'react';
import InputForm from '../InputForm/InputForm';
import PropTypes from 'prop-types';
import questions from  '../../questions.js';
import styles from './Form.css';

const Form = ({ handleSubmit, handleChange }) => {
  const inputFormElements = questions.map(({ nameOfQuestion, question, placeholder }, i) => (
    <InputForm handleChange={handleChange} key={i} nameOfQuestion={nameOfQuestion} question={question} placeholder={placeholder} />
  ));

  return (
    <section className={styles.Form}>
      <form onSubmit={handleSubmit}>
        {inputFormElements}
        <button onSubmit={handleSubmit}>Generate Cover Letter</button>
        <input type="reset" className="reset" name="ResetButton" value="Reset"></input>
      </form>
    </section>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Form;
