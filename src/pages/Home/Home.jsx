import "./Home.css";
import { useChangePage } from "../../utils/customHooks/useChangePage";
import Arrow from "../../components/Arrow/Arrow";
import Cortinilla from "../../components/Cortinilla/Cortinilla";
import { projects } from "../../utils/moks/best3Projects";
import BestProject from "../../components/BestProject/BestProject";

const Home = () => {
  const { openned, transition } = useChangePage({ path: "/projects" });

  return (
    <div id="home">
      <Cortinilla openned={openned} />
      {/* <h1>Home</h1> */}
      <div className="hero">
        <div>
          <img src="/assets/rtc.webp" alt="Branding Rock The Code" />
        </div>
        <p>
          Esta página está enfocada a los alumnos y alumnas de Rock The Code,
          para que puedan subir los proyectos que más les gusten y generar
          comunidad, haciendo que interactuén entre sí y promocionando los
          mejores proyectos para aumentar el nivel general de los mismos.
        </p>
      </div>
      <section id="best_projects">
        <h2>Mejores proyectos actuales</h2>
        <ul>
          {projects.map((project) => (
            <BestProject key={project._id} project={project} />
          ))}
        </ul>
      </section>
      <Arrow funct={transition} />
    </div>
  );
};

export default Home;
