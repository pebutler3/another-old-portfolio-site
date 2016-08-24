import React, { Component } from 'react';

class Bio extends Component {
  render() {
    return (
      <ul className="bio">
        <li>Design + Code</li>
        <li>Born outside of Dayton, Ohio and currently residing in Denver, Colorado.</li>
        <li>Vim is my editor and chief.</li>
        <li>I have a {this.props.age} year old little girl.</li>
        <li>And a hot lady to tie it all together.</li>
      </ul>
    );
  }
}

export default Bio;
