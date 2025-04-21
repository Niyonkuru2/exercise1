// src/components/Projects.js
import React from 'react';
import './Projects.css';
import  vavaImage from '../assets/vava.jpg'

const Projects = () => {
  return (
    <div>
    <section className="projects" id="projects">
          <h2> Hello! I am prince</h2>
          <p>Here are my I have worked on the latest</p>
    </section>


    <section className="image">
      <img src={ vavaImage} alt="vava" />
      <img src={ vavaImage} alt="vava" />
      <img src={ vavaImage} alt="vava" />
    </section>
    </div>
  );
};

export default Projects;
