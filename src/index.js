//const React = require('react');
//const ReactDOM = require('react-dom');
//const App = require('./App');
//When I comment the above in and the bottom out, as my error messages lead me to do, I get an error about the opening bracket on line 9
//This was happening in my EnterBook.js file as well
//I googled it and it suggested the JSX wasn't being rendered because of my Babel settings,
//but no matter what directions I implemented, I keep getting the same error
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
