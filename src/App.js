import React, { Component } from 'react';
import Request from 'superagent';
// import _ from 'lodash';

// Styles
import './App.css';

// Components
import Nav from './Nav';
import Bio from './Bio';
import Tools from './Tools';

// https://api.github.com/users/pebutler3/events

class App extends Component {
  constructor(){
      super();
      this.state = {};
    }

    componentWillMount(){
      this.search();
    }

    render(){
      let repos = this.state.repos
      let avatar = this.state.avatar
      let account = this.state.account

      return (
          <div>
             <div className="App">
                 <Nav
                   account={account}
                 />
                 <Bio avatar={avatar} age={3}/>
                 <ul>
                   <li><strong>Public Repos:</strong> {repos}</li>
                 </ul>
                 <Tools />
             </div>
          </div>
      );
    }

  search(query = "pebutler3") {
    let url = `https://api.github.com/users/${query}`;
    let events = url + '/events';
    Request.get(url).then((response) => {
      this.setState({
        info: response.body.url,
        repos: response.body.public_repos,
        avatar: response.body.avatar_url,
        account: response.body.html_url
      });
    });
    Request.get(events).then((response) => {
      this.setState({
        id: response.body.id
      });
      console.log(response.body[0])
    });
  }

}

export default App;
