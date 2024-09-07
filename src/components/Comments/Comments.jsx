import { Link } from "react-router-dom";
import ImgWrp from "../ImgWrp/ImgWrp";
import "./Comments.css";
import Button from "../Button/Button";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UsersContext } from "../../providers/UsersProvider";
import { comment } from "../../reducers/projects/projects.actions";
import { ProjectsContext } from "../../providers/ProjectsProvider";

const Comments = () => {
  const { state, dispatch } = useContext(ProjectsContext);
  const { state: stateUser } = useContext(UsersContext);
  const { register, handleSubmit, reset, setFocus } = useForm();
  const [responseMessage, setResponseMessage] = useState();
  const { project } = state;
  const { user } = stateUser;

  const submit = async ({ text }) => {
    await comment(dispatch, text, project, user, responseMessage);
    setResponseMessage();
    reset();
  };

  return (
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
                className={comment?.user._id === user?._id ? "right" : "left"}
                style={{
                  order: comment?.user._id === user?._id ? "-1" : "1",
                }}
              >
                {comment?.reply && (
                  <p className="reply">{comment.reply.text}</p>
                )}
                <p>{comment?.text}</p>
                <div className="options">
                  <button
                    onClick={() => {
                      setResponseMessage({
                        text: comment.text,
                        reply: comment._id,
                      });
                      setFocus("text");
                    }}
                  >
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
            {responseMessage && (
              <div className="response_message">
                <p>{responseMessage.text}</p>
                <img
                  src="/assets/icons/x.png"
                  alt="cruz para cerrar la respuesta"
                  title="Cerrar respuesta"
                  onClick={() => setResponseMessage()}
                />
              </div>
            )}
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
  );
};

export default Comments;
