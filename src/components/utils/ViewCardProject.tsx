import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import IProject from '../interfaces/IProject';
import ReactCardFlip from "react-card-flip";
import ReactPlayer from 'react-player'



const ViewCardProject: React.FC<IProject> = ({ title, imageUrl = null, description, techno, year = null, link, video=null }) => {
  const [flip, setFlip] = useState(false);

  return (
    <ReactCardFlip 
      isFlipped={flip}  
      flipDirection="horizontal"
      flipSpeedBackToFront={1} 
      flipSpeedFrontToBack={1}
    >
      {/* Card Front */}
      <div className="cardProject cardProjectF">
        <h5 className="cardTitle">{title}</h5>
        <div className="cardImg">
          {imageUrl !== null && 
          <img className="img-fluid" src={imageUrl} alt="" />}
        </div>
        <div className="cardBody d-flex justify-content-around mt-4">

          <Button className="btn btn-secondary btn-lg" target="_blank" href={link} title="Github">
            <i className="iconGitHub bi bi-github"></i>
          </Button>
          
          <Button className="btn btn-secondary btn-lg" title="Détail" onClick={() => setFlip(!flip)}>
            Détail
          </Button>
        </div>
      </div>

      {/* Card Back */}
      <div className="cardProject cardProjectB">
        <h5 className="cardTitle ">{title}</h5>
        <hr></hr>
        <div className="cardBody">
          <p className="card-text text-center">{description}</p>
          <p className="card-text textCardStack">Techno : {techno}</p>
          {year !== null && <p className="card-text">Année : {year}</p>}

          {video !== null && <ReactPlayer 
              url={video}
              controls
              width="100%"
              height="100%"
            />}
          <div className="cardBody d-flex justify-content-around mt-4">
            <Button className="btn btn-secondary " onClick={() => setFlip(!flip)} title="Retour">
              Retour
            </Button>
          </div>

        </div>
      </div>
    </ReactCardFlip>
  );
};

export default ViewCardProject;
