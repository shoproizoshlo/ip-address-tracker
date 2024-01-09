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

      {Object.entries(currentLocation).map(([key, value]) => (
        <div key={key} className="info">
          <Info
            heading={
              key === "as"
                ? ""
                : key === "location"
                ? Object.entries(value).map(([subKey, subValue]) =>
                    subKey === "timezone"
                      ? (key = "1")
                      : (key = "2")
                  )
                : key
            }
            dataInfo={
              typeof value === "object"
                ? key === "location"
                  ? Object.entries(value).map(([subKey, subValue]) =>
                      subKey !== "timezone" ? `${" "}${subValue}` : ""
                    )
                  : ""
                : value
            }
          />
        </div>
      ))}
    </>
  );
}

export default App;
