import React, { Component } from 'react';
import roadmap from './img/roadmap.png';
import weather from './img/weather.png';
import coacep from './img/coacep.png';
import wikipedia from './img/wikipedia.png';

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <h2>Projects</h2>
        <ul className="gallery">
          <li><a href="https://roadmap-io.herokuapp.com/"><img src={roadmap} alt="" /></a></li>
          <li><a href="https://codepen.io/pebutler3/pen/AXkJzy"><img src={weather} alt="" /></a></li>
          <li><a href="http://coacep.org"><img src={coacep} alt="" /></a></li>
          <li><a href="https://codepen.io/pebutler3/pen/bZkKAq"><img src={wikipedia} alt="" /></a></li>
        </ul>
      </div>
    );
  }
}

export default Projects;
