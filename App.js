import React from 'react';
import SearchBar from './SearchBar';
import MapView from './MapView';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <SearchBar />
      <MapView />
    </div>
  );
};

export default App;
