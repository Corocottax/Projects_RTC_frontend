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
import Button from "../../components/Button/Button";
import { motion } from "framer-motion";
import Skeleton from "../../components/Skeleton/Skeleton";
import BestProject from "../../components/BestProject/BestProject";
import FilterProjects from "../../components/FilterProjects/FilterProjects";

const Projects = () => {
  const { openned, transition } = useChangePage({ path: "/" });
  const { state, dispatch } = useContext(ProjectsContext);
  const { cachedProjects, info, loadingProjects, filtered } = state;
  const placeholderProjects = Array.from(
    { length: 10 },
    (_, index) => index + 1
  );

  useEffect(() => {
    if (!cachedProjects.length) {
      getProjects(dispatch, filtered);
    }
  }, []);

  return (
    <div id="projects">
      <Cortinilla openned={openned} mode="dark" position="left" />
      <Arrow funct={transition} position="left" mode="dark" />
      <FilterProjects />
      <motion.div
        className="projects"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        {loadingProjects &&
          placeholderProjects.map((project) => <BestProject key={project} />)}
        {!loadingProjects &&
          cachedProjects[info?.currentPage - 1]?.projects.map((project) => (
            <BestProject key={project._id} project={project} />
          ))}
      </motion.div>
      <div className="change-page">
        <Button
          onClick={() =>
            changePage(
              dispatch,
              info?.prev,
              cachedProjects,
              info?.currentPage - 1
            )
          }
        >
          Anterior
        </Button>
        <h3>
          {info?.currentPage} / {info?.pages}
        </h3>
        <Button
          onClick={() =>
            changePage(
              dispatch,
              info?.next,
              cachedProjects,
              info?.currentPage + 1
            )
          }
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default Projects;
