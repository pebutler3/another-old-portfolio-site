import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Bio from './Bio';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav contact_url={'mailto:p.e.butler3@gmail.com'} button={'Contact'}/>
          <Bio age={3}/>
      </div>
    );
  }
}

export default App;
