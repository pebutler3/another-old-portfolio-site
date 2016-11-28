import React, { Component } from 'react';

class Projects extends Component {
  render() {
    let recentProjects = [
      ['Roadmap', 'https://github.com/pebutler3/roadmap', 'React'],
      ['Heron', 'https://github.com/getblackboard/heron', 'SCSS/Flexbox'],
      ['Wiki Search', 'http://codepen.io/pebutler3/pen/AXkJzy', 'SCSS/JS/Jquery'],
      ['Minimal Theme', 'https://minimal.mybrightsites.com/','HTML/CSS/JS/Liquid']
    ]

    let inDevelopment = [
      ['CAP Management', 'http://www.capmanagement.com','Wordpress']
    ]

    return (
      <div className="col-3 projects">
        <h2>Recent Projects</h2>
        <ul className="recent-projects">
          {recentProjects.map(project => <li key={project[1]}><a href={project[1]}>	{project[0]} - <small>{project[2]}</small></a></li>)}
        </ul>
        <br />
        <h2>In Development</h2> 
          <ul className="recent-projects">
            {inDevelopment.map(project => <li key={project[1]}><a href={project[1]}>	{project[0]} - <small>{project[2]}</small></a></li>)}
          </ul>
      </div>
    );
  }
}

export default Projects;
