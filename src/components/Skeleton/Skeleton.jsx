import "./Skeleton.css";
import { motion } from "framer-motion";

const Skeleton = ({ w = "300px", h = "200px", quantity }) => {
  return (
    <>
      {Array.from({ length: quantity }, (_, i) => (
        <motion.div
          key={i}
          className="skeleton"
          style={{ width: w, height: h }}
          animate={{ opacity: 1 }}
        ></motion.div>
      ))}
    </>
  );
};

export default Skeleton;
