import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <ul>
          <li><a href={this.props.email}>Email</a></li>
          <li><a href={this.props.twitter}>Twitter</a></li>
          <li><a href={this.props.linkedin}>Linkedin</a></li>
          <li><a href={this.props.github}>Github</a></li>
        </ul>
      </footer>
    )
  }
}

export default Footer;
