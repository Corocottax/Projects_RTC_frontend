import "./Alert.css";

const Alert = ({ message, type = "success" }) => {
  return <div className={`alert ${type}`}>{message}</div>;
};

export default Alert;
