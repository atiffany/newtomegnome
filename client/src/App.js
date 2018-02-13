import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-browser-router';
import './App.css';
import Navigation from './components/Navigation';
import Welcome from './components/Welcome';
import EnterBooks from './components/EnterBooks';
import DisplayBooks from './components/DisplayBooks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path = '/' component={Navigation} />
            <Route path = '/' exact component={Welcome} />
            <Route path = '/enterbook' component={EnterBooks} />
            <Route path = '/displaybooks' component={DisplayBooks} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
