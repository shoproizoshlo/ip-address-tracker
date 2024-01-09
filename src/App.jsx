import { useState, useEffect } from "react";
import "./App.css";
import Arrow from "./assets/icon-arrow.svg";
import Info from "./components/Info";
import locationService from "./service/location";

function App() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    locationService
      .getAll()
      .then((initialLocation) => {
        // console.log(initialLocation);
        setLocation(initialLocation);
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

      {Object.keys(location).map((key) => (
        <div key={key}>{`${key}: ${location[key]}`}</div>
      ))}
      <Info />
      <Info />
      <Info />
      <Info />
    </>
  );
}

export default App;
