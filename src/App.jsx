import { useState } from "react";
import "./App.css";
import Arrow from "./assets/icon-arrow.svg";
import Info from "./components/Info";

function App() {
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
      <Info />
      <Info />
      <Info />
      <Info />
    </>
  );
}

export default App;
