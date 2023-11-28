import React from "react";
import ReactDOM from 'react-dom';
 import App from "./App";
 
const isMorning = true;
const morningText ="Good morning user";
const afternoonText ="Afternoon user"

const morningElement = <div>{morningText} ,it is 8 am</div>
const afternoonElement = <div>{afternoonText} ,it is 6 pm</div>

const greetingElement = isMorning ? morningElement : afternoonElement;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);