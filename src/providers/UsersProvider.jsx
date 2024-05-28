import { createContext, useEffect, useReducer } from "react";
import { USERS_INITIAL, usersReducer } from "../reducers/users/users.reducer";
import { checksession } from "../reducers/users/users.actions";
import { useNavigate } from "react-router-dom";

export const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, USERS_INITIAL);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      checksession(dispatch, navigate);
    }
  }, []);

  return (
    <UsersContext.Provider value={{ state, dispatch }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
