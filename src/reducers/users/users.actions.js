import { API } from "../../API/API";

export const login = async (data, dispatch) => {
  const { user, token } = (
    await API({ endpoint: "/users/login", method: "POST", body: data })
  ).response;

  dispatch({ type: "LOGIN", payload: { user, token } });
  localStorage.setItem("token", token);
};

export const checksession = async (dispatch) => {
  const { response, status } = await API({
    endpoint: "/users/checksession",
    method: "POST",
  });

  if (status === 401) {
    dispatch({ type: "LOGOUT" });
    localStorage.clear();
  } else {
    dispatch({
      type: "CHECK_SESSION",
      payload: { user: response.user, token: localStorage.getItem("token") },
    });
  }
};
