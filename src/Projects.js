import React, { Component } from 'react';

class Projects extends Component {
  render() {
    let recentProjects = [
      ['Roadmap', 'https://github.com/pebutler3/roadmap'],
      ['Heron', 'https://github.com/getblackboard/heron'],
      ['Wiki Search', 'http://codepen.io/pebutler3/pen/AXkJzy'],
      ['Minimal Theme', 'https://minimal.mybrightsites.com/']
    ]
    return (
      <div className="col-3 projects">
        <h2>Recent Projects</h2>
        <ul className="recent-projects">
          {recentProjects.map(project => <li key={project[1]}><a href={project[1]}>	&#8961; {project[0]}</a></li>)}
        </ul>
      </div>
    );
  }
}

export default Projects;
