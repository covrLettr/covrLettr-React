import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputForm.css';

const InputForm = ({ nameOfQuestion, placeholder, question }) => (
  <>
    <label className={styles.InputForm} htmlFor={nameOfQuestion} >{question}</label>
    <input type="text" name={nameOfQuestion} placeholder={placeholder} id={nameOfQuestion} />
  </>
);

InputForm.propTypes = {
  nameOfQuestion: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired
};

export default InputForm;
