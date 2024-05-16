import { API } from "../../API/API";

export const login = async (data, dispatch, navigate, setAlert) => {
  //TODO: LOADING EN EL FORMULARIO AL HACER LOGIN
  setTimeout(async () => {
    const res = await API({
      endpoint: "/users/login",
      method: "POST",
      body: data,
    });

    if (res.status === 200) {
      dispatch({
        type: "LOGIN",
        payload: { user: res.response.user, token: res.response.token },
      });
      localStorage.setItem("token", res.response.token);
      navigate("/profile");
      setAlert();
    } else {
      setAlert({ message: res.response, type: "error" });
    }
  }, 5000);
};

export const checksession = async (dispatch, navigate) => {
  const { response, status } = await API({
    endpoint: "/users/checksession",
    method: "POST",
  });

  if (status === 401) {
    logout(dispatch, navigate);
  } else {
    dispatch({
      type: "CHECK_SESSION",
      payload: { user: response.user, token: localStorage.getItem("token") },
    });
  }
};

export const logout = async (dispatch, navigate) => {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("token");
  navigate("/");
};
