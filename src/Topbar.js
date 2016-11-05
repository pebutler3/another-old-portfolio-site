import React, { Component } from 'react';

class Topbar extends Component {

  constructor(){
    super();
    this.state = {
      "showMenu" : "hidden",
      "menuButtonState" : ""
    };
  }

  render() {
    return(
       <nav className='row'>
         <div className={'col-1 menu ' + this.state.showMenu}>
           <a href="mailto:p.e.butler3@gmail.com">Contact</a>
           <a href="resume_current.pdf" target="_BLANK">Resumé</a>
         </div>
         <h2 className='col-11'>P.E. Butler III</h2>
         <button className={'menuButton ' + this.state.menuButtonState} onClick={this.toggleMenu.bind(this)}>&#9776;</button>
       </nav>
    );
  }
  toggleMenu() {
    let css = (this.state.showMenu === "hidden") ? "show" : "hidden";
    let expanded = (this.state.menuButtonState === "" ? "expanded" : "")
    this.setState({
      "showMenu":css,
      'menuButtonState': expanded
    });
  }
}

export default Topbar;
