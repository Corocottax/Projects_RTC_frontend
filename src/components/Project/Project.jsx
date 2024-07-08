import { Link } from "react-router-dom";
import ImgWrp from "../ImgWrp/ImgWrp";
import "./Project.css";

const Project = ({ project }) => {
  return (
    <Link to={`/projects/${project._id}`}>
      <div className="project">
        <h3>{project.title}</h3>
        <ImgWrp w="100%" h="200px" borderRadius="var(--rtc-br-primary)">
          <img src={project.imgs[0]} alt={project.title} />
        </ImgWrp>
        <p className="description">{project.description}</p>
      </div>
    </Link>
  );
};

export default Project;
