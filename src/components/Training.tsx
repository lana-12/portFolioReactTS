import React from 'react';
import ViewCardTraining from './utils/ViewCardTraing';
import trainingsData from '../data/trainings.json'


const Training = () => {
    
  return (
        <>
          <div className="row">
              <div className="col cardTraining">
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
                      />
                    
                  ))}
              </div>
          </div>
        </>
    );
}

export default Training;