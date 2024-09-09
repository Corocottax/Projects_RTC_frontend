import { createContext, useState } from "react";
import Alert from "../components/Alert/Alert";

export const AlertContext = createContext();

const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState();

  return (
    <AlertContext.Provider value={{ setAlert }}>
      <Alert
        message={alert?.message}
        type={alert?.type}
        show={alert ? true : false}
        time={alert?.time}
      />
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
