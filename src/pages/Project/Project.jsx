import { useParams } from "react-router-dom";
import "./Project.css";
import { useContext, useEffect, useRef, useState } from "react";
import { ProjectsContext } from "../../providers/ProjectsProvider";
import { getProject } from "../../reducers/projects/projects.actions";
import Carousel from "../../components/Carousel/Carousel";
import ImgWrp from "../../components/ImgWrp/ImgWrp";
import Stars from "../../components/Stars/Stars";
import { API } from "../../API/API";
import Button from "../../components/Button/Button";
import ProjectSkeleton from "../../components/ProjectSkeleton/ProjectSkeleton";

const Project = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(ProjectsContext);
  const { project, loadingProject } = state;

  useEffect(() => {
    getProject(dispatch, id);
  }, []);

  const comment = useRef();

  const submit = () => {
    API({
      endpoint: `/comments?idProject=${project._id}`,
      method: "POST",
      body: { text: comment.current.value },
    });
  };

  return (
    <div id="page_project">
      {loadingProject ? (
        <ProjectSkeleton>
          <div className="comments">
            <div></div>
            <div className="send_message">
              <input placeholder="Escribe aquí tu comentario" />
              <Button mode="light" disabled>
                Enviar
              </Button>
            </div>
          </div>
        </ProjectSkeleton>
      ) : (
        <>
          <div className="info_user_project">
            <ImgWrp w="100px" h="100px" borderRadius="100%">
              <img
                src={project?.user.avatar}
                alt={`perfil del usuario ${project?.user.name}`}
              />
            </ImgWrp>
            <h2>
              {project?.user.name} {project?.user.lastName}
            </h2>
          </div>
          <div>
            <div className="info_project">
              {project && <Carousel imgs={project.imgs} w="250px" h="250px" />}
              <h3>{project?.title}</h3>
              <p>{project?.description}</p>
              {project && (
                <Stars averageRating={project?.averageRating} visible />
              )}
            </div>
            <div className="comments">
              <div>
                {project?.comments.reverse().map((comment) => {
                  return (
                    <div>
                      <p>{comment.text}</p>
                    </div>
                  );
                })}
              </div>
              <div className="send_message">
                <input placeholder="Escribe aquí tu comentario" ref={comment} />
                <Button onClick={submit} mode="light">
                  Enviar
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Project;
