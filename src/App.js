import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Bio from './Bio';
import Tools from './Tools';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav contact_url={'mailto:p.e.butler3@gmail.com'} button={'Contact'}/>
          <Bio age={3}/>
          <Tools />
      </div>
    );
  }
}

export default App;
