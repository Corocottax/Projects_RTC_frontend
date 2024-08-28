import { API } from "../../API/API";

export const login = async (data, dispatch, navigate, setAlert) => {
  dispatch({ type: "LOADING" });

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
    dispatch({ type: "STOP_LOADING" });
    setAlert({ message: res.response, type: "error" });
  }
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

export const getRepositories = async (dispatch, user) => {
  const res = await fetch(
    `https://api.github.com/users/${user?.github
      .split("/")
      .at(-1)}/repos?sort=pushed`
  );
  const response = await res.json();
  dispatch({ type: "GET_REPOSITORIES", payload: response });
};

export const searchUsers = async (setUsers, input = "") => {
  const res = await API({
    endpoint: `/users/getbyname?name=${input}`,
  });
  setUsers(res.response);
};
