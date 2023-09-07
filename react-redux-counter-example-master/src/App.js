import React, {Component} from 'react';

import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Counter App with Redux !</h1>
        </header>
        <Counter/>
      </div>
    );
  }
}

export default App;
