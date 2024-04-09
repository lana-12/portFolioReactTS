import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ITraining from '../interfaces/ITraining';


const ViewCard: React.FC<ITraining> = ({ title, description, level , year, conception, back, front, style, skills, organism=null }) => {
  return (

        <Card  style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>Niveau : {level} - Année : {year}</Card.Text>
            <Card.Text>{description}</Card.Text>
            <Card.Text>
              <div><p><u>Conception</u> : {conception}</p></div>
              <div><p><u>Back</u> : {back}</p></div>
              <div><p><u>Front</u> : {front}</p></div>
              <div><p><u>Style</u> : {style}</p></div>
              <div><p><u>Méthodologie</u> : {skills}</p></div>
            </Card.Text> 

            {organism !== null && 
              <Card.Text>{organism}</Card.Text>}

            {/* <Button variant="primary">Go somewhere</Button> */}

          </Card.Body>
        </Card>

  );
}

export default ViewCard;



