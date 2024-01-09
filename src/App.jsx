import { useState, useEffect } from "react";
import "./App.css";
import Arrow from "./assets/icon-arrow.svg";
import Info from "./components/Info";
import locationService from "./service/location";

function App() {
  const [currentLocation, setCurrentLocation] = useState([]);

  useEffect(() => {
    locationService
      .getAll()
      .then((initialLocation) => {
        console.log(`IP Address ${initialLocation.ip}`);
        console.log(
          `Location ${initialLocation.location.country}, ${initialLocation.location.region}`
        );
        console.log(`Timezone ${initialLocation.location.timezone}`);
        console.log(`isp ${initialLocation.isp}`);
        setCurrentLocation(initialLocation);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="background"></div>
      <div className="map"></div>
      <h1>IP Address tracker </h1>
      <div>
        <input type="text" />
        <button>
          <img src={Arrow} alt="Arrow" />
        </button>
      </div>
      <p>IP Address {currentLocation.ip}</p>
      <p>
        Location
        {Object.entries(currentLocation.location).map(([key, value]) => (
          <div key={key}>{`${key}: ${value}`}</div>
        ))}
      </p>
      <p>ISP {currentLocation.isp}</p>
      <Info />
    </>
  );
}

export default App;
