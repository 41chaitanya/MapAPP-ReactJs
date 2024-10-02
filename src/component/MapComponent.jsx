import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { apikey } from "../utils/Keys";

const MapComponent = () => {
    const containerStyle = {
        width: '100vw',
        height: '100vh',
      };
      const center = {
        lat: 20.5937,
        lng: 78.9629
      };
    
  return (
    <LoadScript googleMapsApiKey={apikey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
        {/* Add any map markers or other features here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
