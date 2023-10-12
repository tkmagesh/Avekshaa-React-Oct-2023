import React, {useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* 
Using ES6 module (calculator.js)
*/

/* 
import * as calc from './calculator'
console.log(calc.add(100,200))
console.log(calc.subtract(100,200)) 
*/

/* 
import * as calc from './calculator'
const add = calc.add,
  subtract = calc.subtract;
console.log(add(100,200))
console.log(subtract(100,200))  
*/

/* 
import * as calc from './calculator'
const {add, subtract} = calc;
console.log(add(100,200))
console.log(subtract(100,200))   
*/

/* 
import {add, subtract} from './calculator'
console.log(add(100,200))
console.log(subtract(100,200)) 
*/

// importing default export
/* 
import utilsObj from './calculator'
console.log(utilsObj.getDate()) 
*/

// import non-default & default exports
import utilsObj, {add, subtract} from './calculator';
console.log(add(100,200))
console.log(subtract(100,200)) 
console.log(utilsObj.getDate())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
