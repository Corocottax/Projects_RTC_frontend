export const PROJECTS_INITIAL = {
  best_projects: [],
  projects: [],
  project: null,
  info: null,
};

export const projectsReducer = (state, action) => {
  switch (action.type) {
    case "GET_PROJECTS":
      return {
        ...state,
        projects: [...action.payload.projects],
        info: { ...action.payload.info },
      };
    case "GET_PROJECT":
      return { ...state, project: { ...action.payload } };
    case "GET_BEST_PROJECTS":
      return { ...state, best_projects: [...action.payload] };
    default:
      return { ...state };
  }
};
