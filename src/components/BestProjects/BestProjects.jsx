import "./BestProjects.css";
import React, { useContext, useEffect } from "react";
import BestProject from "../BestProject/BestProject";
import { getBestProjects } from "../../reducers/projects/projects.actions";
import { ProjectsContext } from "../../providers/ProjectsProvider";
import { motion } from "framer-motion";

const BestProjects = () => {
  const { state, dispatch } = useContext(ProjectsContext);
  const { best_projects } = state;

  useEffect(() => {
    best_projects.length === 0 && getBestProjects(dispatch);
  }, []);

  const printPlaceholders = () => {
    const arrayPlaceholders = [];
    for (let i = 0; i < 3; i++) {
      arrayPlaceholders.push(
        <div key={i} className="project_placeholder"></div>
      );
    }
    return arrayPlaceholders;
  };

  return (
    <section id="best_projects">
      <motion.h2 animate={{ opacity: 1 }}>Mejores proyectos actuales</motion.h2>
      <motion.ul animate={{ opacity: 1 }}>
        {!best_projects.length && printPlaceholders()}
        {best_projects.map((project) => (
          <BestProject key={project._id} project={project} />
        ))}
      </motion.ul>
    </section>
  );
};

export default BestProjects;
