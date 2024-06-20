import "./Home.css";
import { useChangePage } from "../../utils/customHooks/useChangePage";
import Arrow from "../../components/Arrow/Arrow";
import Cortinilla from "../../components/Cortinilla/Cortinilla";
import { motion } from "framer-motion";
import BestProjects from "../../components/BestProjects/BestProjects";
import Select from "../../components/Select/Select";
import Option from "../../components/Option/Option";

const Home = () => {
  const { openned, transition } = useChangePage({ path: "/projects" });

  return (
    <div id="home">
      <Cortinilla openned={openned} />
      <div className="hero">
        <div>
          <motion.img
            src="/assets/rtc1.webp"
            alt="Branding Rock The Code"
            animate={{ opacity: 1 }}
          />
        </div>
        <motion.p animate={{ opacity: 1 }}>
          Esta página está enfocada a los alumnos y alumnas de Rock The Code,
          para que puedan subir los proyectos que más les gusten y generar
          comunidad, haciendo que interactuén entre sí y promocionando los
          mejores proyectos para aumentar el nivel general de los mismos.
        </motion.p>
      </div>
      <BestProjects />
      <Arrow funct={transition} />
    </div>
  );
};

export default Home;
