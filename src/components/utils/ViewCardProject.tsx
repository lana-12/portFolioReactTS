import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import IProject from '../interfaces/IProject';
import Contact from '../Contact';

const ViewCardProject: React.FC<IProject> = ({ title, imageUrl = null, description, techno, year = null }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleDetailClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Card className={isFlipped ? 'card-flipped' : ''} style={{ width: '18rem' }}>
      <div className="card-content">
        {imageUrl !== null && <Card.Img variant="top" src={imageUrl} />}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Techno : {techno}</Card.Text>
          {year !== null && <Card.Text>Année : {year}</Card.Text>}
          <Card.Text>{description}</Card.Text>

            <Button className="btn btn-secondary" target="_blank" href="https://github.com/lana-12" title="Github">
              <i className="iconGitHub bi bi-github"></i>
            </Button>
            <Button className="btn btn-secondary" onClick={handleDetailClick}>
              {isFlipped ? 'Retour' : 'Détail'}
            </Button>

        </Card.Body>
      </div>

      <div className="card-back-content">
        {/* Ajouter le component coté back */}
        {/* Réfléchir quoi afficher */}
        {/* Retour position initial */}
        <Contact />

      </div>

    </Card>
  );
};

export default ViewCardProject;
