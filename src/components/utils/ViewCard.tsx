import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import IViewCard from '../interfaces/IViewCard';


const ViewCard: React.FC<IViewCard> = ({ title, imageUrl= null, description, level =null, year=null }) => {
  return (
     <Card  style={{ width: '18rem' }}>
      {imageUrl !== null && 
      <Card.Img variant="top" src={imageUrl} />}
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        {level !== null && 
        <Card.Text>Niveau : {level}</Card.Text> }

        {year !== null && 
            <Card.Text>Année : {year}</Card.Text> }

        {/* {organisme !== null && 
            <Card.Text>Année : {organisme}</Card.Text> } */}

        <Card.Text>{description}</Card.Text>

        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ViewCard;



