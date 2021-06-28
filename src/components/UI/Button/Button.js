import React from 'react';

import styles from './Button.module.css';

// import styled from 'styled-components';

// //button is a method from styled-components and to access it we have to use backticks
// const Button = styled.button`
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #cccccc;
//   color: #fafafa;
//   background: #333333;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;
//   width: 100%;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #fafafa;
//     border-color: #cccccc;
//     color: #333333;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};  

export default Button;
