import Arrow from "../../components/Arrow/Arrow";
import Cortinilla from "../../components/Cortinilla/Cortinilla";
import { useChangePage } from "../../utils/customHooks/useChangePage";
import "./Projects.css";

const Projects = () => {
  const { openned, transition } = useChangePage({ path: "/" });

  return (
    <div id="projects">
      {/* <h1>Projects</h1> */}
      <Cortinilla openned={openned} mode="dark" position="left" />
      <Arrow funct={transition} position="left" mode="dark" />
    </div>
  );
};

export default Projects;
