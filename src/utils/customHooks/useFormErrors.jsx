import { useContext, useEffect } from "react";
import { AlertContext } from "../../providers/AlertProvider";

export const useFormErrors = (errors) => {
  const { setAlert } = useContext(AlertContext);

  useEffect(() => {
    if (Object.keys(errors).length) {
      setAlert({
        message: errors[Object.keys(errors)[0]].message,
        type: "error",
      });
    } else {
      setAlert();
    }
  }, [Object.keys(errors).length]);

  return;
};
