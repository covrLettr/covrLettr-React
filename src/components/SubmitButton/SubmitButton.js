import React from 'react';
import PropTypes from 'prop-types';
import styles from './submitButton.css';

const SubmitButton = ({ onSubmit }) => {
  return (
    <button className={styles.Button} onSubmit={onSubmit} >Create 
    Covr Lettr</button>
  );
};

SubmitButton.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SubmitButton;
