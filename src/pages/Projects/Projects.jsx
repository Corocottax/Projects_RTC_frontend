import { useContext, useEffect } from "react";
import Arrow from "../../components/Arrow/Arrow";
import Cortinilla from "../../components/Cortinilla/Cortinilla";
import { useChangePage } from "../../utils/customHooks/useChangePage";
import "./Projects.css";
import { ProjectsContext } from "../../providers/ProjectsProvider";
import {
  changePage,
  getProjects,
} from "../../reducers/projects/projects.actions";

const Projects = () => {
  const { openned, transition } = useChangePage({ path: "/" });
  const { state, dispatch } = useContext(ProjectsContext);
  const { projects, info } = state;

  useEffect(() => {
    getProjects(dispatch);
  }, []);

  return (
    <div id="projects">
      <Cortinilla openned={openned} mode="dark" position="left" />
      <Arrow funct={transition} position="left" mode="dark" />
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {projects.map((project) => {
          return (
            <div key={project._id}>
              <h3>{project.title}</h3>
              <img
                style={{ width: "200px", height: "150px" }}
                src={project.imgs[0]}
              />
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
          gap: "20px",
        }}
      >
        <button onClick={() => changePage(dispatch, info?.prev)}>
          Previous
        </button>
        <h3>
          {info?.currentPage} / {info?.pages}
        </h3>
        <button onClick={() => changePage(dispatch, info?.next)}>Next</button>
      </div>
    </div>
  );
};

export default Projects;
