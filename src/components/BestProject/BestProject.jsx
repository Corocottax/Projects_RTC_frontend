import { Link } from "react-router-dom";
import "./BestProject.css";
import { motion } from "framer-motion";
import ImgWrp from "../ImgWrp/ImgWrp";
import Skeleton from "../Skeleton/Skeleton";
import SkeletonProvider from "../../providers/SkeletonProvider";

const BestProject = ({ project, imgUser }) => {
  return (
    <SkeletonProvider status={project}>
      <Link to={`/projects/${project?._id}`} title="visitar proyecto">
        <motion.article className="best_project_wrp" animate={{ opacity: 1 }}>
          <Skeleton w="100%" h="60%" br="0px">
            <ImgWrp w="100%" h="60%">
              <img src={project?.imgs[0]} />
            </ImgWrp>
          </Skeleton>
          <div className="best_project_detail">
            <Skeleton w="180px" h="27px">
              <h3>{project?.title}</h3>
            </Skeleton>
            <div>
              <div>
                <Skeleton w="50px" h="50px" br="100%">
                  <ImgWrp br="100%" w="50px" h="50px">
                    <img src={imgUser ? imgUser : project?.user?.avatar} />
                  </ImgWrp>
                </Skeleton>
                <Skeleton w="100px" h="20px">
                  <p>{project?.nameUser}</p>
                </Skeleton>
              </div>
              <Skeleton br="100%" w="50px" h="50px">
                <div className="best_project_average_rating">
                  <p>{project?.averageRating}</p>
                </div>
              </Skeleton>
            </div>
          </div>
        </motion.article>
      </Link>
    </SkeletonProvider>
  );
};

export default BestProject;
