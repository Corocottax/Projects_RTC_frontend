import "./Skeleton.css";
import { motion } from "framer-motion";

const Skeleton = ({ quantity }) => {
  /* <motion.div
          key={i}
          className="skeleton"
          style={{ width: w, height: h }}
          animate={{ opacity: 1 }}
        ></motion.div> */

  return (
    <>
      {Array.from({ length: quantity }, (_, i) => (
        <motion.div className="skeleton" key={i} animate={{ opacity: 1 }}>
          <div></div>
          <div className="best_project_detail_skeleton">
            <div></div>
            <div>
              <div>
                <div></div>
                <div></div>
              </div>
              <div className="best_project_average_rating_skeleton"></div>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default Skeleton;
