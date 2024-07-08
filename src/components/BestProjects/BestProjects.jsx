import "./BestProjects.css";
import React, { useContext, useEffect } from "react";
import BestProject from "../BestProject/BestProject";
import { getBestProjects } from "../../reducers/projects/projects.actions";
import { ProjectsContext } from "../../providers/ProjectsProvider";
import { motion } from "framer-motion";
import Skeleton from "../Skeleton/Skeleton";

const BestProjects = () => {
  const { state, dispatch } = useContext(ProjectsContext);
  const { best_projects } = state;

  useEffect(() => {
    setTimeout(() => {
      best_projects.length === 0 && getBestProjects(dispatch);
    }, 2000);
  }, []);

  return (
    <section id="best_projects">
      <motion.h2 animate={{ opacity: 1 }}>Mejores proyectos actuales</motion.h2>
      <motion.ul animate={{ opacity: 1 }}>
        {!best_projects.length && <Skeleton quantity={3}/>}
        {best_projects.map((project) => (
          <BestProject key={project._id} project={project} />
        ))}
      </motion.ul>
    </section>
  );
};

export default BestProjects;
