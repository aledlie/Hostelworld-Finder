import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Call API with search parameters
  };

  return (
    <Form inline>
      <Form.Group controlId="location">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="checkIn">
        <Form.Label>Check-in</Form.Label>
        <Form.Control
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="checkOut">
        <Form.Label>Check-out</Form.Label>
        <Form.Control
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSearch}>
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
