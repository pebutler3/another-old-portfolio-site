import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div className='navBar'>
        <ul>
          <li>
            <a href={this.props.contact_url}>{this.props.button}</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav;
