export const PROJECTS_INITIAL = {
  best_projects: [],
  cachedProjects: [],
  project: null,
  info: null,
  loadingProjects: false,
  filtered: false,
  loadingProject: false,
};

export const projectsReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loadingProjects: true };
    case "LOADING_PROJECT":
      return { ...state, loadingProject: true };
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
      return {
        ...state,
        project: { ...action.payload },
        loadingProject: false,
      };
    case "CLEAR_PROJECT":
      return {
        ...state,
        project: null,
      };
    case "GET_FILTER_PROJECTS":
      return {
        ...state,
        cachedProjects: [
          {
            info: { ...action.payload.info },
            projects: [...action.payload.projects],
          },
        ],
        loadingProjects: false,
        info: { ...action.payload.info },
        filtered: true,
      };
    case "CLEAN_FILTER_PROJECTS":
      return {
        ...state,
        cachedProjects: [],
        filtered: false,
      };
    case "GET_BEST_PROJECTS":
      return { ...state, best_projects: [...action.payload] };
    default:
      return { ...state };
  }
};
