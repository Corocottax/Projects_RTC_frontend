import { useParams } from "react-router-dom";
import "./Project.css";
import { useContext, useEffect } from "react";
import { ProjectsContext } from "../../providers/ProjectsProvider";
import { getProject } from "../../reducers/projects/projects.actions";

const Project = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(ProjectsContext);
  const { project } = state;

  useEffect(() => {
    getProject(dispatch, id);
  }, []);

  return <div style={{ color: "black" }}>{project && project.title}</div>;
};

export default Project;