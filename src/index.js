import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
// eslint-disable-next-line no-unused-vars
import reportWebVitals from './reportWebVitals';
import { MemoHook } from './Hooks/MemoHook';
import { Callbacks } from 'jquery';
import { CallbackHook } from './Hooks/CallbackHook';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<CallbackHook/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
