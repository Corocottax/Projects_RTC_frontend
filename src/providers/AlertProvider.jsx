import { createContext, useState } from "react";
import Alert from "../components/Alert/Alert";

export const AlertContext = createContext();

const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState();

  return (
    <AlertContext.Provider value={{ setAlert }}>
      {alert && <Alert message={alert.message} type={alert.type} />}
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;