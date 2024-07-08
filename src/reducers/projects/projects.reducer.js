export const PROJECTS_INITIAL = {
  best_projects: [],
  cachedProjects: [],
  project: null,
  info: null,
  loadingProjects: false,
};

export const projectsReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loadingProjects: true };
    case "GET_PROJECTS":
      return {
        ...state,
        cachedProjects: [
          ...state.cachedProjects,
          {
            info: { ...action.payload.info },
            projects: [...action.payload.projects],
          },
        ],
        info: { ...action.payload.info },
        loadingProjects: false,
      };
    case "GET_PREVIOUS_PROJECTS":
      return { ...state, info: action.payload, loadingProjects: false };
    case "GET_PROJECT":
      return { ...state, project: { ...action.payload } };
    case "GET_BEST_PROJECTS":
      return { ...state, best_projects: [...action.payload] };
    default:
      return { ...state };
  }
};
