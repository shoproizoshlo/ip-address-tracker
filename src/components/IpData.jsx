import Info from "./Info";
import Arrow from "../assets/icon-arrow.svg";
import "./IpData.css";

const IpData = ({ data }) => {
  return (
    <div className="ip-data">
      <h1>IP Address tracker </h1>
      <div className="search">
        <input type="text" />
        <button>
          <img src={Arrow} alt="Arrow" />
        </button>
      </div>

      <div>
        {data && (
          <div className="info-container">
            <Info heading="ip" dataInfo={data.ip} />
            <Info
              heading="location"
              dataInfo={`${data.location.region}, ${data.location.country}`}
            />
            <Info heading="timezone" dataInfo={data.location.timezone} />
            <Info heading="isp" dataInfo={data.isp} />
          </div>
        )}
      </div>
    </div>
  );
};

export default IpData;
