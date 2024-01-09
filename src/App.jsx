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
        // console.log(`IP Address ${initialLocation.ip}`);
        // console.log(
        //   `Location ${initialLocation.location.country}, ${initialLocation.location.region}`
        // );
        // console.log(`Timezone ${initialLocation.location.timezone}`);
        // console.log(`isp ${initialLocation.isp}`);
        // console.log(initialLocation);
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
        <div key={key}>
          <Info
            heading={key}
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
          {/* {`${key}: `}
          {typeof value === "object" ? (
            <ul>
              {Object.entries(value).map(([subKey, subValue]) => (
                <li key={subKey}>{`${subKey}: ${subValue}`}</li>
              ))}
            </ul>
          ) : (
            value
          )} */}
        </div>
      ))}

      <Info heading={"heading"} dataInfo={"some data"} />
    </>
  );
}

export default App;
