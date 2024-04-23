import Stars from "../Stars/Stars";
import "./BestProject.css";

const BestProject = ({ project }) => {
  return (
    <div className="best_project_wrp">
      <div className="best_project">
        <div className="info">
          <h2>{project.title}</h2>
          <div>
            <div>
              <img src={project.user.avatar} alt={project.name_user} />
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
    </div>
  );
};

export default BestProject;
