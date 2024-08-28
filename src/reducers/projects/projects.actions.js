import { API } from "../../API/API";

export const getBestProjects = async (dispatch) => {
  const response = (await API({ endpoint: "/projects/bestprojects" }))
    ?.response;

  dispatch({ type: "GET_BEST_PROJECTS", payload: response });
};

export const getProject = async (dispatch, id) => {
  dispatch({ type: "LOADING_PROJECT" });
  dispatch({ type: "CLEAR_PROJECT" });

  setTimeout(async () => {
    const response = (await API({ endpoint: `/projects/${id}` })).response;

    dispatch({ type: "GET_PROJECT", payload: response });
  }, 100);
};

export const getProjects = async (dispatch, filtered) => {
  dispatch({ type: "LOADING" });
  if (filtered) {
    dispatch({
      type: "CLEAN_FILTER_PROJECTS",
    });
  }
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

  dispatch({ type: "LOADING" });

  const cachedProject = cachedProjects.find(
    (element) => element.info.currentPage === currentPage
  );

  if (cachedProject) {
    dispatch({
      type: "GET_PREVIOUS_PROJECTS",
      payload: cachedProject.info,
    });
  } else {
    setTimeout(async () => {
      const { projects, info } = (await API({ url })).response;
      dispatch({
        type: "GET_PROJECTS",
        payload: { projects, info },
      });
    }, 2000);
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

    await API({
      endpoint: "/projects",
      method: "POST",
      body: body,
      multipart: true,
    });

    setAlert({
      message: "Proyecto creado correctamente",
      type: "success",
    });
  }
};

export const filterProjects = async (data, dispatch) => {
  let name = data?.nameUser || "";
  let rating = data?.averageRating || "";
  let type = data?.type || "";

  console.log(data);

  dispatch({ type: "LOADING" });

  const res = await API({
    endpoint: `/projects/filter?name=${name}&rating=${rating}&type=${type}`,
  });

  dispatch({
    type: "GET_FILTER_PROJECTS",
    payload: res.response,
  });
};

export const cleanFilters = async (dispatch, filtered) => {
  await getProjects(dispatch, filtered);
};
