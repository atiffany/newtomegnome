import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-browser-router';
import './App.css';
import Navigation from './components/Navigation';
import DisplayBooks from './components/DisplayBooks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route to = '/' component={Navigation} />
            <Route to = '/displaybooks' component={DisplayBooks} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
