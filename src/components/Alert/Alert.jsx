import "./Alert.css";

const Alert = ({ message, type, show }) => {
  return (
    <div className={`alert ${type} ${show ? "show" : ""}`}>{message}</div>
  );
};

export default Alert;
