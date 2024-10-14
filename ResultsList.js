import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ResultsList = ({ hostels }) => {
  return (
    <ListGroup>
      {hostels.map((hostel) => (
        <ListGroup.Item key={hostel.id}>
          <h5>{hostel.name}</h5>
          <p>{hostel.location}</p>
          <p>Price: {hostel.price}</p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ResultsList;
