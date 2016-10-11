import React, { Component } from 'react';
import Request from 'superagent';
// import _ from 'lodash';

// import avatar
import avatar from './img/avatar.png';

// Styles
import './App.css';

// Components
import Nav    from './Nav';
import Bio    from './Bio';
import Footer from './Footer';

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
      let account = this.state.account
      let myTeam = this.state.myTeam
      let crest = this.state.crest

      return (
           <div className="app">
               <Nav account={account} />
               <Bio avatar={avatar} daughtersAge={3} myTeam={myTeam} crest={crest} repos={repos} />
               <Footer
                 email={'mailto:p.e.butler3@gmail.com'}
                 twitter={'https://twitter.com/pebutler3'}
                 linkedin={'https://www.linkedin.com/in/pebutler3'}
                 github={account}
               />
           </div>
      );
    }

  search(query = "pebutler3") {
    let url = `https://api.github.com/users/${query}`;
    let fulham = 'http://api.football-data.org/v1/teams/63/';
    Request.get(url).then((response) => {
      this.setState({
        info: response.body.url,
        repos: response.body.public_repos,
        avatar: response.body.avatar_url,
        account: response.body.html_url
      });
    });
    Request.get(fulham).set('X-Auth-Token', '8a640408c9654a43976aa1f3e6b2cd0b').set('Accept', 'application/json').then((response) => {
      this.setState({
          myTeam: response.body.name,
          crest: response.body.crestUrl
      });
    });
  }

}

export default App;
