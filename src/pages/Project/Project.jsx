import { useParams } from "react-router-dom";
import "./Project.css";
import { useContext, useEffect, useState } from "react";
import { ProjectsContext } from "../../providers/ProjectsProvider";
import { getProject } from "../../reducers/projects/projects.actions";
import Carousel from "../../components/Carousel/Carousel";

const Project = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(ProjectsContext);
  const { project } = state;

  useEffect(() => {
    getProject(dispatch, id);
  }, []);

  return (
    <div style={{ color: "black" }}>
      {project && <Carousel imgs={project.imgs} />}
    </div>
  );
};

export default Project;
