import { Link } from "react-router-dom";
import "./BestProject.css";
import { motion } from "framer-motion";
import ImgWrp from "../ImgWrp/ImgWrp";

const BestProject = ({ project, imgUser }) => {

  return (
    <Link to={`/projects/${project._id}`} title="visitar proyecto">
      <motion.article className="best_project_wrp" animate={{ opacity: 1 }}>
        <ImgWrp w="100%" h="60%">
          <img src={project.imgs[0]} />
        </ImgWrp>
        <div className="best_project_detail">
          <h3>{project.title}</h3>
          <div>
            <div>
              <ImgWrp borderRadius="100%" w="50px" h="50px">
                <img src={imgUser ? imgUser : project.user.avatar} />
              </ImgWrp>
              <p>{project.nameUser}</p>
            </div>
            <div className="best_project_average_rating">
              <p>{project.averageRating}</p>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

export default BestProject;
