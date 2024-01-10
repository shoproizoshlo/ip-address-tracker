import Info from "./Info";
import Arrow from "../assets/icon-arrow.svg";
import "./IpData.css";

const IpData = ({ data }) => {
  return (
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
  );
};

export default IpData;
