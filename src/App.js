import React, { Component } from 'react';
import Request from 'superagent';

// import avatar
import avatar from './img/avatar.png';

// Styles
import './App.css';

// Components
import TopBar   from './Topbar';
import Header   from './Header';
import Bio      from './Bio';
import Footer   from './Footer';

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

      return (
           <div className="app">
             <TopBar />
             <Header account={account} />
             <Bio avatar={avatar} daughtersAge={4} repos={repos} />
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
    Request.get(url).then((response) => {
      this.setState({
        info: response.body.url,
        repos: response.body.public_repos,
        avatar: response.body.avatar_url,
        account: response.body.html_url
      });
    });
  }

}

export default App;
