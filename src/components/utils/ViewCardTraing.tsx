import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ITraining from '../interfaces/ITraining';


const ViewCardTraining: React.FC<ITraining> = ({ title, description, level , year, conception, back, front, style, skills, organism=null }) => {
  return (

        <Card  className="m-4" >
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <hr></hr>
            <Card.Text className='text-center'>{description}</Card.Text>
            <Card.Text>Niveau : {level}</Card.Text>
            <Card.Text>Année : {year}</Card.Text>

            <Card.Text><u>Conception</u> : {conception}</Card.Text> 

            <Card.Text><u>Back</u> : {back}</Card.Text> 
            <Card.Text><u>Front</u> : {front}</Card.Text> 
            <Card.Text><u>Style</u> : {style}</Card.Text> 
            <Card.Text><u>Méthodologie</u> : {skills}</Card.Text> 

            {organism !== null && 
              <Card.Text><u>Centre</u> : {organism}</Card.Text>}

          </Card.Body>
        </Card>

  );
}

export default ViewCardTraining;



