import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav className='navBar'>
        <ul>
          <li className="name">P.E. Butler III</li>
          <li>
            <a href={this.props.contact_url}>{this.props.button}</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav;
