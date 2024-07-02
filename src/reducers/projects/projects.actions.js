import { API } from "../../API/API";

export const getBestProjects = async (dispatch) => {
  const response = (await API({ endpoint: "/projects/bestprojects" }))
    ?.response;

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

export const changePage = async (
  dispatch,
  url,
  cachedProjects,
  currentPage
) => {
  if (!url) {
    return;
  }

  const cachedProject = cachedProjects.find(
    (element) => element.info.currentPage === currentPage
  );

  if (cachedProject) {
    dispatch({
      type: "GET_PREVIOUS_PROJECTS",
      payload: cachedProject.info,
    });
  } else {
    const { projects, info } = (await API({ url })).response;

    dispatch({
      type: "GET_PROJECTS",
      payload: { projects, info },
    });
  }
};