// src/components/Projects.js
import React from 'react';
import './Projects.css';
import  vavaImage from '../assets/vava.jpg'
import photoImage from '../assets/photo.jpeg'
import drawImage from '../assets/draw.webp'

const Projects = () => {
  return (
    <div>
    <section className="projects">
          <h2> Projects </h2>
          <p>Here are my I have worked on the latest</p>
    </section>
    
    <section className="images">
      <div className="project-card">
      <img src={ vavaImage} alt="vava" className="card-bg" />
      <div className="card-overlay">
        <h3>E-PROPERTY</h3>
        <a href="#" className="demo-link">
          Live Demo<span>→</span>
        </a>
      </div>
      </div>

       <div className="project-card">
      <img src={ photoImage} alt="photo" className="card-bg" />
      <div className="card-overlay">
      <h3>Weather App</h3>
      <a href="#" className="demo-link">
          Live Demo<span>→</span>
        </a>
      </div>
      </div>

      <div className="project-card">
      <img src={ drawImage} alt="draw" className="card-bg" />
      <div className="card-overlay">
      <h3>Web Design</h3>
      <a href="#" className="demo-link">
          Live Demo<span>→</span>
        </a>
      </div>
      </div>
</section>
    </div>
  );
};

export default Projects;
