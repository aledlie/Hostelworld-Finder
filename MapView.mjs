import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapViewComponent = ({ hostels, location }) => {
  return (
    <MapContainer
      center={[location.latitude, location.longitude]}
      zoom={13}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {hostels.map((hostel) => (
        <Marker
          key={hostel.id}
          position={[hostel.latitude, hostel.longitude]}
        >
          <Popup>
            <div>
              <h2>{hostel.name}</h2>
              <p>Latitude: {hostel.latitude}</p>
              <p>Longitude: {hostel.longitude}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapViewComponent;
