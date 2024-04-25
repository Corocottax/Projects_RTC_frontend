import { createContext, useReducer } from "react";
import {
  PROJECTS_INITIAL,
  projectsReducer,
} from "../reducers/projects/projects.reducer";

export const ProjectsContext = createContext();

const ProjectsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(projectsReducer, PROJECTS_INITIAL);

  return (
    <ProjectsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsProvider;
