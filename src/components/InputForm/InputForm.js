import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputForm.css';

const InputForm = ({ handleChange, nameOfQuestion, placeholder, question }) => (
  <>
    <label className={styles.InputForm} htmlFor={nameOfQuestion} >{question}</label>
    <input onChange={handleChange} type="text" name={nameOfQuestion} placeholder={placeholder} id={nameOfQuestion} />
  </>
);

InputForm.propTypes = {
  nameOfQuestion: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default InputForm;
