import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//TODO: Faire une interface 
interface ViewCardProps {
  title: string;
  imageUrl?: string | null;
  level?: string | null;
  description: string;
  year?: string;
}



const ViewCard: React.FC<ViewCardProps> = ({ title, imageUrl= null, description, level =null, year=null }) => {
  return (
     <Card style={{ width: '18rem' }}>
      {imageUrl !== null && 
      <Card.Img variant="top" src={imageUrl} />}
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        {level !== null && 
        <Card.Text>{level}</Card.Text> }

        {year !== null && 
            <Card.Text>{year}</Card.Text> }

        <Card.Text>{description}</Card.Text>

        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ViewCard;



