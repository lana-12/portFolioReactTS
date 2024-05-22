import React from 'react';
import ViewCardProject from './utils/ViewCardProject';
import projectsData from '../data/projects.json';

const Project = () => {

    return (
        <>
        <h2 className="ms-3" style={{ color: 'white' }}>Mes Projets</h2>

        <div className="row">
            <div className="col-12 d-flex justify-content-center flex-wrap ">
              
              {projectsData.map((project, index) => (
                  <ViewCardProject
                  key={index}
                  title={project.title}
                  imageUrl={project.imageURL}
                  description={project.description}
                  techno={project.techno}
                  year={project.year}
                  video={project.video}
                  link={project.link}
                  github={project.github}
                  github2={project.github2}
                  />
              ))}

            </div>      
        </div>
        </>
    );
}

export default Project;
