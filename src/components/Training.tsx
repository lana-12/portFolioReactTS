import React from 'react';
import ViewCardTraining from './utils/ViewCardTraing';
import trainingsData from '../data/trainings.json'


const Training = () => {
    
  return (
        <>
          <div className="row">
              <div className="col d-flex justify-content-center flex-wrap cardTraining">
               
                {trainingsData.map((training, index) => (
                  <ViewCardTraining 
                    key={index}
                    year={training.year}
                    title={training.title}
                    level={training.level}
                    description={training.description}
                    conception={training.conception}
                    back={training.back}
                    front={training.front}
                    style={training.style}
                    skills={training.skills}
                    organism={training.organism}
                  />
                  ))}
               
              </div>
          </div>
        </>
    );
}

export default Training;