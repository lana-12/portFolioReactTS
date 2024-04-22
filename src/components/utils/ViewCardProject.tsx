import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import IProject from '../interfaces/IProject';
import ReactCardFlip from "react-card-flip";
import ReactPlayer from 'react-player'



const ViewCardProject: React.FC<IProject> = ({ title, imageUrl = null, description, techno, year = null, video=null }) => {
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
        <div className="cardBody">
          <p className="">Techno : {techno}</p>


          <Button className="btn btn-secondary" target="_blank" href="https://github.com/lana-12" title="Github">
            <i className="iconGitHub bi bi-github"></i>
          </Button>
          <Button className="btn btn-secondary" title="Détail" onClick={() => setFlip(!flip)}>
            Détail
          </Button>
        </div>
      </div>

      {/* Card Back */}
      <div className="cardProject cardProjectF">
        <h5 className="cardTitle">{title}</h5>
        <div className="cardBody">
          <p className="card-text">Techno : {techno}</p>
          {year !== null && <p className="card-text">Année : {year}</p>}
          <p className="card-text">{description}</p>

          {video !== null && <ReactPlayer 
              url={video}
              controls
              width="100%"
              height="100%"
            />}

          <Button className="btn btn-secondary" onClick={() => setFlip(!flip)} title="Retour">
            Retour
          </Button>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default ViewCardProject;
