import { useState, useEffect } from "react";
import axios from "axios";
import BgDesktop from "./assets/pattern-bg-desktop.png";
import BgMobile from "./assets/pattern-bg-mobile.png";
import IpData from "./components/IpData";
import MyMap from "./components/MyMap";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [ipAddress, setIpAddress] = useState("8.8.8.8");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_BxswHR82Y6xar2WCrknG83SkjVZhD&ipAddress=${ipAddress}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [ipAddress]);

  const handleIpChange = (e) => {
    e.preventDefault();
    setIpAddress(e.target.value);
  };

  return (
    <>
      <div className="relative z-1 h-2/6 overflow-x-hidden">
        <img
          src={BgDesktop}
          alt=""
          className="w-full	h-full absolute top-0	left-0	object-cover	object-center"
        />
      </div>

      {data && (
        <>
          <MyMap lat={data.location.lat} lng={data.location.lng} />
        </>
      )}

      <IpData
        data={data}
        ipAddress={ipAddress}
        handleIpChange={handleIpChange}
      />
    </>
  );
}

export default App;
