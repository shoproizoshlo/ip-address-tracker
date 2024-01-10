import "./Info.css";

const Info = ({ heading, dataInfo }) => {
  return (
    <div className="info">
      <h3>{heading}</h3>
      <p>{dataInfo}</p>
    </div>
  );
};

export default Info;
