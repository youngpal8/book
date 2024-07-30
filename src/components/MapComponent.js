// src/components/MapComponent.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = () => {
  const mapContainerStyle = {
    height: '510px',
    width: '650px',
  };

  const center = {
    lat: 6.6177, // Replace with your latitude
    lng: 3.3318, // Replace with your longitude
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCpeSzmxxfEtUZ6hEW4tQhozd1jMuGv0lU" // Replace with your API key
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
