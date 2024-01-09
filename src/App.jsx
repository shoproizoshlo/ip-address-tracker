import { useState, useEffect } from "react";
import axios from "axios";
import Arrow from "./assets/icon-arrow.svg";
import Info from "./components/Info";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://geo.ipify.org/api/v2/country?apiKey=at_IJAJNzQ38wdGCtGTCldCG4UTdwnLM"
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
      <div className="background"></div>
      <div className="map"></div>
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
          </>
        )}
      </div>
    </>
  );
}

export default App;
