import React from 'react';
import ReactDOM from 'react-dom';

const todoTitle = "Call Family";
const todoDesc ="Ipsum dolor amet lorem et stet dolor ipsum";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

ReactDOM.render(
 <div>
 <h1>Todo App</h1>
 <h3>{todoTitle}</h3>
 <p>{todoDesc}</p>
 <p>{dateName + "/" + monthName + "/" + currentYear}</p>
 </div>,
   document.getElementById('root')
);
