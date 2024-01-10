import { useState, useEffect } from "react";
import axios from "axios";
import Arrow from "./assets/icon-arrow.svg";
import BgDesktop from "./assets/pattern-bg-desktop.png";
import BgMobile from "./assets/pattern-bg-mobile.png";
import IpData from "./components/IpData";
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

      {data && (
        <>
          <MyMap lat={data.location.lat} lng={data.location.lng} />
        </>
      )}

      <IpData data={data} />
    </>
  );
}

export default App;
