import React from 'react';
import ViewCard from './utils/ViewCard';


const Training = () => {
     const trainings = [
    {
      title: 'Concepteur Développeur d\'Application',
      description: 'Description formation',
      level:'Bac+4',
      year:'2024'
    },
    {
      title: 'Développeur Web Web Mobile',
      level: 'Bac+2',
      description: 'Description formation',
      year:'2023',
    },
  ];

    return (
        <>
        <div className="row">
            <div className="col  ">
                {trainings.map((training, index) => (
                    <ViewCard
                        key={index}
                        year={training.year}
                        title={training.title}
                        level={training.level}
                        description={training.description}
                    />
                ))}
            </div>
        </div>
        </>
    );
}

export default Training;