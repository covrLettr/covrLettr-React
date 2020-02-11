import React from 'react';
import InputForm from '../InputForm/InputForm';
import SubmitButton from '../SubmitButton/SubmitButton.js'; 
import questions from  '../../questions.js';

const Form = () => {
  const inputFormElements = questions.map(({ nameOfQuestion, question, placeholder }) => (
    <InputForm key={nameOfQuestion} nameOfQuestion={nameOfQuestion} question={question} placeholder={placeholder} />
  ));

  return (
    <form>
      {inputFormElements}
      <aside>
        <SubmitButton />
      </aside>
    </form>
  );
    
};


export default Form;
