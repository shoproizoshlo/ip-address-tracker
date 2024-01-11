import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./MyMap.css";

const MyMap = ({ lat, lng }) => {
  const [position, setPosition] = useState([lat, lng]);
  const [mapKey, setMapKey] = useState(0); // Добавлен новый state для обновления key

  const customIcon = new L.DivIcon({
    className: "custom-marker-icon",
    html: '<i class="fa-solid fa-location-dot fa-2xl"></i>',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  useEffect(() => {
    setPosition([lat, lng]);
    setMapKey((prevKey) => prevKey + 1); // Изменяем key для MapContainer
  }, [lat, lng]);

  return (
    <div className="map" id="map">
      <MapContainer
        key={mapKey} // Используем key для полной перерисовки компонента
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customIcon}>
          <Popup>A pretty CSS3 popup. Easily customizable.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MyMap;
