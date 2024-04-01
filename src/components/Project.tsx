import React from 'react';
import ViewCard from './utils/ViewCard';


const Project = () => {

    const projects = [
    {
      title: 'Projet 1',
      imageUrl: 'https://example.com/project1.jpg',
      description: 'Description du projet 1',
    },
    {
      title: 'Projet 2',
      imageUrl: 'https://example.com/project2.jpg',
      description: 'Description du projet 2',
    },
    // Ajoutez d'autres projets selon vos besoins
  ];

    return (
        <>
        <h2 className="">Mes Projets</h2>

        <div className="row">
            <div className="col-12 d-flex">
            {projects.map((project, index) => (
                <ViewCard
                key={index}
                title={project.title}
                imageUrl={project.imageUrl}
                description={project.description}
                />
            ))}
            
            </div>      
        </div>
        </>
    );
}

export default Project;
