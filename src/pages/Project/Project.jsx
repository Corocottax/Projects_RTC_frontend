import { Link, useParams } from "react-router-dom";
import "./Project.css";
import { useContext, useEffect, useRef, useState } from "react";
import { ProjectsContext } from "../../providers/ProjectsProvider";
import { comment, getProject } from "../../reducers/projects/projects.actions";
import Carousel from "../../components/Carousel/Carousel";
import ImgWrp from "../../components/ImgWrp/ImgWrp";
import Stars from "../../components/Stars/Stars";
import Button from "../../components/Button/Button";
import Skeleton from "../../components/Skeleton/Skeleton";
import SkeletonProvider from "../../providers/SkeletonProvider";
import { UsersContext } from "../../providers/UsersProvider";
import { useForm } from "react-hook-form";

const Project = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(ProjectsContext);
  const { state: stateUser } = useContext(UsersContext);
  const { project } = state;
  const { user } = stateUser;
  const { register, handleSubmit, reset } = useForm();
  const [responseMessage, setResponseMessage] = useState();

  useEffect(() => {
    getProject(dispatch, id);
  }, []);

  const submit = async ({ text }) => {
    await comment(dispatch, text, project, user);
    reset();
  };

  const responseToUser = (comment) => {
    console.log(comment);

    setResponseMessage(comment.text);
  };

  return (
    <SkeletonProvider status={project}>
      <div id="page_project">
        <>
          <div className="info_user_project">
            <Skeleton w="100px" h="100px" br="100%">
              <ImgWrp w="100px" h="100px" br="100%">
                <img
                  src={project?.user.avatar}
                  alt={`perfil del usuario ${project?.user.name}`}
                />
              </ImgWrp>
            </Skeleton>
            <Skeleton w="200px" h="30px">
              <h2>
                {project?.user.name} {project?.user.lastName}
              </h2>
            </Skeleton>
          </div>
          <div>
            <div className="info_project">
              <Skeleton w="250px" h="250px">
                {project && (
                  <Carousel imgs={project.imgs} w="250px" h="250px" />
                )}
              </Skeleton>
              <Skeleton w="250px" h="40px">
                <h3>{project?.title}</h3>
              </Skeleton>
              <Skeleton w="500px" h="20px"></Skeleton>
              <Skeleton w="500px" h="20px"></Skeleton>
              <Skeleton w="500px" h="20px"></Skeleton>
              <Skeleton w="500px" h="20px"></Skeleton>
              <p>{project?.description}</p>
              <Skeleton w="150px" h="35px">
                <Link to={project?.link} target="_blank">
                  <Button mode="dark">Visitar proyecto</Button>
                </Link>
              </Skeleton>
              <Skeleton w="500px" h="30px">
                {project && (
                  <Stars averageRating={project?.averageRating} visible />
                )}
              </Skeleton>
            </div>
            <div className={`comments ${responseMessage && "response"}`}>
              <div>
                {project?.comments.toReversed().map((comment) => {
                  return (
                    <div
                      key={comment?._id}
                      style={{
                        justifyContent:
                          comment?.user?._id === user?._id ? "end" : "start",
                      }}
                    >
                      <ImgWrp br="100%" w="30px" h="30px">
                        <img
                          src={comment?.user.avatar}
                          alt={`perfil del usuario ${comment?.user.name}`}
                          title={comment?.user.name}
                        />
                      </ImgWrp>
                      <article
                        className={
                          comment?.user._id === user?._id ? "right" : "left"
                        }
                        style={{
                          order: comment?.user._id === user?._id ? "-1" : "1",
                        }}
                      >
                        {comment?.text}
                        <div className="options">
                          <button onClick={() => responseToUser(comment)}>
                            <img src="/assets/icons/message.png" />
                          </button>
                        </div>
                      </article>
                    </div>
                  );
                })}
              </div>
              <div className="send_message">
                {!user ? (
                  <Link to="/login">
                    <Button>No puedes comentar sin cuenta</Button>
                  </Link>
                ) : (
                  <form onSubmit={handleSubmit(submit)}>
                    {responseMessage && <p className="response_message">{responseMessage}</p>}
                    <input
                      placeholder="Escribe aquí tu comentario"
                      {...register("text")}
                    />
                    <Button type="submit" mode="light">
                      Enviar
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </>
      </div>
    </SkeletonProvider>
  );
};

export default Project;
