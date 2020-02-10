import React from 'react';
import PropTypes from 'prop-types';


const InputForm = ({ nameOfQuestion, placeholder }) => (
  <input type="text" name={nameOfQuestion} placeholder={placeholder} />

);

InputForm.propTypes = {
  nameOfQuestion: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default InputForm;
