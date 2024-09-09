import { useContext, useEffect } from "react";
import "./Alert.css";
import { AlertContext } from "../../providers/AlertProvider";

const Alert = ({ message, type, show, time = 2 }) => {
  const { setAlert } = useContext(AlertContext);

  useEffect(() => {
    setTimeout(() => {
      setAlert();
    }, time * 1000 + 500);
  }, [message]);

  return (
    <div
      className={`alert ${type} ${show ? "show" : ""}`}
      style={{
        animation: show
          ? `fadeIn 0.5s linear forwards, fadeOut 0.5s ${time}s linear forwards`
          : "",
      }}
    >
      {message}
    </div>
  );
};

export default Alert;
