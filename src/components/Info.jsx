import "./Info.css";

const Info = ({ heading, dataInfo }) => {
  return (
    <div className="info">
      <p>{heading}</p>
      <p>{dataInfo}</p>
    </div>
  );
};

export default Info;
