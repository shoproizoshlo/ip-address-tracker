import Info from "./Info";
import Arrow from "../assets/icon-arrow.svg";
import "./IpData.css";

const IpData = ({ data, ipAddress, handleIpChange }) => {
  return (
    <div className="absolute top-8 left-2/4	transform -translate-x-1/2 z-2 text-center">
      <h1>IP Address tracker </h1>
      <div className="search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            value={ipAddress}
            onChange={handleIpChange}
          />
          <button>
            <img src={Arrow} alt="Arrow" />
          </button>
        </form>
      </div>

      <div>
        {data && (
          <div className="info-container">
            <Info heading="ip address" dataInfo={data.ip} />
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
