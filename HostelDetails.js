import React from 'react';
import { Card } from 'react-bootstrap';

const HostelDetails = ({ hostel }) => {
  return (
    <Card>
      <Card.Img variant="top" src={hostel.image} />
      <Card.Body>
        <Card.Title>{hostel.name}</Card.Title>
        <Card.Text>{hostel.description}</Card.Text>
        <Card.Text>Price: {hostel.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default HostelDetails;
