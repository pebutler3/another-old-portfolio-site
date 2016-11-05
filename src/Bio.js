import React, { Component } from 'react';
import Projects from './Projects';


class Bio extends Component {

  render() {
    return (
      <div className='row myInformation'>
        <img className='col-3 avatar' src={this.props.avatar} alt="P.E. Butler III" />
        <ul className="col-3">
          <h2>Bio</h2>
          <li>Design + Code</li>
          <li>Born outside of Dayton, Ohio and currently residing in Denver, Colorado.</li>
          <li>Vim</li>
          <li>I have a {this.props.daughtersAge} year old little girl.</li>
          <li>And a hot lady to tie it all together.</li>
          <br />
          <li><strong>Public Repos:</strong> {this.props.repos}</li>
        </ul>
        <Projects />
      </div>
    );
  }
}

export default Bio;
