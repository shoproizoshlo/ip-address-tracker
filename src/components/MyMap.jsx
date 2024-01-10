import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./MyMap.css";

const MyMap = ({ lat, lng }) => {
  const position = [lat, lng];

  return (
    <div className="map" id="map">
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Your Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MyMap;
