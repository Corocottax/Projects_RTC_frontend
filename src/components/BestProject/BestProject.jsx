import { Link } from "react-router-dom";
import Stars from "../Stars/Stars";
import "./BestProject.css";
import { motion } from "framer-motion";
import ImgWrp from "../ImgWrp/ImgWrp";

const BestProject = ({ project }) => {
  return (
    <Link to={`/projects/${project._id}`}>
      <motion.div className="best_project_wrp" animate={{ opacity: 1 }}>
        <div className="best_project">
          <div className="info">
            <h2>{project.title}</h2>
            <div>
              <ImgWrp w="50px" h="50px" borderRadius="10px">
              {console.log(project.user)}
                <img
                  src={
                    project.user.avatar
                      ? project.user.avatar
                      : "/assets/avatar/dino.png"
                  }
                  alt={project.nameUser}
                />
              </ImgWrp>
              <h3>{project.nameUser}</h3>
            </div>
          </div>
          <ImgWrp w="100%" h="100%">
            <img
              src={project.imgs[0]}
              alt={`proyecto ${project.title} de ${project.nameUser}`}
            />
          </ImgWrp>
        </div>
        <Stars averageRating={project.averageRating} />
      </motion.div>
    </Link>
  );
};

export default BestProject;
