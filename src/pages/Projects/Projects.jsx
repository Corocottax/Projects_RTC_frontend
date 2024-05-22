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
  const { cachedProjects, info } = state;

  useEffect(() => {
    getProjects(dispatch);
  }, []);

  return (
    <div id="projects">
      <Cortinilla openned={openned} mode="dark" position="left" />
      <Arrow funct={transition} position="left" mode="dark" />
      <div className="projects">
        {cachedProjects[info?.currentPage - 1]?.projects.map((project) => {
          return (
            <div key={project._id} className="project">
              <h3>{project.title}</h3>
              <div className="img_wrp">
                <img src={project.imgs[0]} alt={project.title} />
              </div>
              <p className="description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
                voluptates sit, quasi dolorem quidem ad deserunt numquam
                deleniti. Nostrum facilis porro corrupti quam? Error explicabo
                magni dolorum? Magni, odio facilis?Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Quam voluptates sit, quasi dolorem
                quidem ad deserunt numquam deleniti. Nostrum facilis porro
                corrupti quam? Error explicabo magni dolorum? Magni, odio
                facilis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
                voluptates sit, quasi dolorem quidem ad deserunt numquam
                deleniti. Nostrum facilis porro corrupti quam? Error explicabo
                magni dolorum? Magni, odio facilis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
                voluptates sit, quasi dolorem quidem ad deserunt numquam
                deleniti. Nostrum facilis porro corrupti quam? Error explicabo
                magni dolorum? Magni, odio facilis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
                voluptates sit, quasi dolorem quidem ad deserunt numquam
                deleniti. Nostrum facilis porro corrupti quam? Error explicabo
                magni dolorum? Magni, odio facilis?
              </p>
            </div>
          );
        })}
      </div>
      <div className="change-page">
        <button
          onClick={() =>
            changePage(
              dispatch,
              info?.prev,
              cachedProjects,
              info?.currentPage - 1
            )
          }
        >
          Previous
        </button>
        <h3>
          {info?.currentPage} / {info?.pages}
        </h3>
        <button
          onClick={() =>
            changePage(
              dispatch,
              info?.next,
              cachedProjects,
              info?.currentPage + 1
            )
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Projects;
