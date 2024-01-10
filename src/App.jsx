import { useState, useEffect } from "react";
import axios from "axios";
import Arrow from "./assets/icon-arrow.svg";
import BgDesktop from "./assets/pattern-bg-desktop.png";
import BgMobile from "./assets/pattern-bg-mobile.png";
import Info from "./components/Info";
import MyMap from "./components/MyMap";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://geo.ipify.org/api/v2/country,city?apiKey=at_IJAJNzQ38wdGCtGTCldCG4UTdwnLM"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="background">
        <picture>
          <source
            srcSet={BgMobile}
            type="image/jpg"
            media="(max-width:992px)"
          />
          <img src={BgDesktop} alt="" />
        </picture>
      </div>
      <div className="map" id="map">
        {data && (
          <>
            <MyMap lat={data.location.lat} lng={data.location.lng} />
          </>
        )}
      </div>
      <div className="info">
        <h1>IP Address tracker </h1>
        <div>
          <input type="text" />
          <button>
            <img src={Arrow} alt="Arrow" />
          </button>
        </div>

        <div>
          {data && (
            <>
              <Info heading="ip" dataInfo={data.ip} />
              <Info
                heading="location"
                dataInfo={`${data.location.region}, ${data.location.country}`}
              />
              <Info heading="timezone" dataInfo={data.location.timezone} />
              <Info heading="isp" dataInfo={data.isp} />
              <Info heading="lat" dataInfo={data.location.lat} />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
