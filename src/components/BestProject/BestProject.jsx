import { Link } from "react-router-dom";
import Stars from "../Stars/Stars";
import "./BestProject.css";
import { motion } from "framer-motion";

const BestProject = ({ project }) => {
  return (
    <Link to={`/projects/${project._id}`}>
      <motion.div className="best_project_wrp" animate={{ opacity: 1 }}>
        <div className="best_project">
          <div className="info">
            <h2>{project.title}</h2>
            <div>
              <div>
                <img
                  src={
                    project.user.avatar
                      ? project.user.avatar
                      : "/assets/avatar/dino.png"
                  }
                  alt={project.name_user}
                />
              </div>
              <h3>{project.name_user}</h3>
            </div>
          </div>
          <div className="img_wrp">
            <img
              src={project.imgs[0]}
              alt={`proyecto ${project.title} de ${project.name_user}`}
            />
          </div>
        </div>
        <Stars averageRating={project.average_rating} />
      </motion.div>
    </Link>
  );
};

export default BestProject;
