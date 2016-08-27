import React, { Component } from 'react';
import Request from 'superagent';
// import _ from 'lodash';

// Styles
import './App.css';

// Components
import Nav from './Nav';
import Bio from './Bio';
import Tools from './Tools';



class App extends Component {
  constructor(){
      super();
      this.state = {};
    }

    componentWillMount(){
      this.search();
    }

    render(){
      let info = this.state.info
      let repos = this.state.repos
      let avatar = this.state.avatar
      return (
          <div>
            <ul>
              <li>{info}</li>
              <li>{repos}</li>
            </ul>
             <div className="App">
                 <Nav contact_url={'mailto:p.e.butler3@gmail.com'} button={'Contact'}/>
                 <Bio avatar={avatar} age={3}/>
                 <Tools />
             </div>
          </div>
      );
    }

  search(query = "pebutler3") {
    var url = `https://api.github.com/users/${query}`;
    Request.get(url).then((response) => {
      this.setState({
        info: response.body.url,
        repos: response.body.public_repos,
        avatar: response.body.avatar_url
    });
    console.log(response)
    });
  }
}

export default App;
