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

export const postProject = async (
  data,
  repositories,
  setAlert,
  next,
  errors,
  step,
  limit
) => {

  console.log(step);
  console.log(limit);

  if (step < limit && !Object.keys(errors).length) {
    next();
  } else {
    const repository = repositories.find(
      (repository) => repository.name === data.repository
    );

    const body = new FormData();

    body.append("title", data.title);
    body.append("description", data.description);
    body.append("link", repository.html_url);
    body.append("deploy", repository.homepage);
    body.append("type", data.type);
    body.append("imgs", data.firstImg[0]);
    body.append("imgs", data.secondImg[0] || "");
    body.append("imgs", data.thirdImg[0] || "");
    body.append("vote", 5);

    const res = await fetch("http://localhost:3000/api/v1/projects/", {
      method: "POST",
      body: body,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const response = await res.json();
    console.log(response);
    setAlert({
      message: "Proyecto creado correctamente",
      type: "success",
    });
  }
};
