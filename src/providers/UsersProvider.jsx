import { createContext, useEffect, useReducer } from "react";
import { USERS_INITIAL, usersReducer } from "../reducers/users/users.reducer";
import { checksession } from "../reducers/users/users.actions";

export const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, USERS_INITIAL);

  useEffect(() => {
    if (localStorage.getItem("token")) {
        checksession(dispatch)
    }
  }, []);

  return (
    <UsersContext.Provider value={{ state, dispatch }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;