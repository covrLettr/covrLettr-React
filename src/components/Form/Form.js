import React, { Fragment } from 'react';
import InputForm from '../InputForm/InputForm';
import PropTypes from 'prop-types';
import questions from  '../../questions.js';
import styles from './Form.css';

const Form = ({ handleSubmit, handleChange }) => {
  const inputFormElements = questions.map((question, i) => {
  
    let enumItems;
    if(question.enum){
      enumItems = question.enum.map(option => (
        <option key={option} value={option}>{option}</option>
      ));
    }
    
    return (
      <Fragment key={question.nameOfQuestion}>
        {!question.enum ? <InputForm handleChange={handleChange} key={i} nameOfQuestion={question.nameOfQuestion} question={question.question} placeholder={question.placeholder} />
          : <>
            <label htmlFor={question.nameOfQuestion}>{question.question}</label>
            <select name={question.nameOfQuestion} onChange={handleChange} id={question.nameOfQuestion}>
              {enumItems}
            </select>
          </>}
      </Fragment>
    );
  });

  return (
    <section className={styles.Form}>
      <form onSubmit={handleSubmit}>
        {inputFormElements}
        <button onSubmit={handleSubmit}>Generate Cover Letter</button>
        <input type="reset" className={styles.Reset} name="ResetButton" value="Reset"></input>
      </form>
    </section>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Form;
