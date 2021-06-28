import React, { useState } from 'react';
import ErrorMessage from './ErrorMessage';

import Button from '../../UI/Button/Button';

import styles from './CourseInput.module.css';
// import styled from 'styled-components';

//we can also declare this styled component in another component
//if we're only going to use this styled componenet in this component alone
// const FormControl = styled.div`
//   margin: 0.5rem 0;
//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => props.invalid ? 'red' : '' };
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => props.invalid ? 'red' : '#ccc' };
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: ${props => props.invalid ? '#ffd7d7' : '#fad0ec' };
//     border-color: #8b005d;
//   }

//   & p {
//     color: ${props => props.invalid ? 'red' : '' };
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  //to check the state if the user entered something valid
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    //trim is a built-in method that removes whitespace at the beginning and the end
    if (enteredValue.trim().length === 0) {
      //call setIsValid and set the state to false if the user enter an invalid data
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* backticks or template literal, this constructs as string 
        and you'll still be able to enter a dynamic syntax inside the backtick */}
      {/* <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type='text' onChange={goalInputChangeHandler} />
        {!isValid ? <p>This field is required.</p> : ''}
      </div> */}
      <div
        className={`${styles['form-control']} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type='text' onChange={goalInputChangeHandler} />
        {!isValid ? <ErrorMessage /> : ''}
      </div>
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
