import React from 'react';
import './Projects.css'; // Create a CSS file for styling the projects
import linkup from './images/client-link.png';
import netflix from './images/netflix.png';
import skiltest from './images/olvera.png';

const projects = [
  {
    title: "Netflix Replica",
    description: "Developed a Netflix replica app using Firebase, TMDB API, React, JavaScript, Redux, and Axios.",
    technologies: "React, Firebase, TMDB API, Redux, Axios",
    link: "https://netflixreplica2.web.app/",
    previewImage: netflix
  },
  {
    title: "Client Link-Up",
    description: "Leveraged React and Material-UI (MUI) to create a sleek and responsive Client Management System.",
    technologies: "React, Material-UI, Firebase, Git, JavaScript",
    link: "#", // Add the live demo link
    previewImage: linkup
  },
  {
    title: "Skill Test",
    description: "Created a skill test web application using React, HTML, CSS, and JavaScript.",
    technologies: "React, HTML, CSS, JavaScript",
    link: "https://skill-test-baa69.web.app/",
    previewImage: skiltest
  }
];

const Projects = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-preview">
              <img src={project.previewImage} alt={`${project.title} Preview`} />
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.technologies}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
