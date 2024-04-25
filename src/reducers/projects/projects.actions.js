import { API } from "../../API/API";

export const getBestProjects = async (dispatch) => {
  const response = (
    await API({ endpoint: "/projects" })
  )?.response?.projects?.slice(0, 3);

  dispatch({ type: "GET_BEST_PROJECTS", payload: response });
};

export const getProject = async (dispatch, id) => {
  const response = (await API({ endpoint: `/projects/${id}` })).response;

  dispatch({ type: "GET_PROJECT", payload: response });
};

export const getProjects = async (dispatch) => {
  const { projects, info } = (await API({ endpoint: "/projects" })).response;

  dispatch({
    type: "GET_PROJECTS",
    payload: { projects, info },
  });
};

export const changePage = async (dispatch, url) => {
  if (!url) {
    return;
  }

  const { projects, info } = (await API({ url })).response;

  dispatch({
    type: "GET_PROJECTS",
    payload: { projects, info },
  });
};
