import React, { Component } from 'react';
import Tools from './Tools';


class Bio extends Component {
  render() {
    return (
      <div className="myInformation">
        <img className="avatar" src={this.props.avatar} alt="P.E. Butler III" />
        <ul className="bio">
          <h2>Bio</h2>
          <li>Design + Code</li>
          <li>Born outside of Dayton, Ohio and currently residing in Denver, Colorado.</li>
          <li>Vim is my editor and chief.</li>
          <li>I have a {this.props.daughtersAge} year old little girl.</li>
          <li>And a hot lady to tie it all together.</li>
          <br />
          <li><strong>Public Repos:</strong> {this.props.repos}</li>
          <li>
            <strong>Favorite Team:</strong> {this.props.myTeam}
            <img className="fulhamCrest" src={this.props.crest} width="25" alt={this.props.myTeam}/>
          </li>
        </ul>
        <Tools />
      </div>
    );
  }
}

export default Bio;
