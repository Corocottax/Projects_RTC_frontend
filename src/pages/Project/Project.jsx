import { Link, useParams } from "react-router-dom";
import "./Project.css";
import { useContext, useEffect } from "react";
import { ProjectsContext } from "../../providers/ProjectsProvider";
import { getProject } from "../../reducers/projects/projects.actions";
import Carousel from "../../components/Carousel/Carousel";
import ImgWrp from "../../components/ImgWrp/ImgWrp";
import Stars from "../../components/Stars/Stars";
import Button from "../../components/Button/Button";
import Skeleton from "../../components/Skeleton/Skeleton";
import SkeletonProvider from "../../providers/SkeletonProvider";
import Comments from "../../components/Comments/Comments";
import { useModal } from "../../utils/customHooks/useModal";
import Modal from "../../components/Modal/Modal";
import Rate from "../../components/Rate/Rate";
import { UsersContext } from "../../providers/UsersProvider";

const Project = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(ProjectsContext);
  const { state: stateUser } = useContext(UsersContext);
  const { project } = state;
  const { openned, openModal, closeModal } = useModal();

  useEffect(() => {
    getProject(dispatch, id);
  }, []);

  return (
    <SkeletonProvider status={project}>
      <Modal openned={openned} closeModal={closeModal}>
        <Rate closeModal={closeModal} />
      </Modal>
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
              <Skeleton w="250px" h="52px">
                <h3>{project?.title}</h3>
              </Skeleton>
              <Skeleton w="500px" h="20px"></Skeleton>
              <Skeleton w="500px" h="20px"></Skeleton>
              <Skeleton w="500px" h="20px"></Skeleton>
              <Skeleton w="500px" h="20px"></Skeleton>
              <p>{project?.description}</p>
              <Skeleton w="150px" h="35px">
                <Link to={project?.link} target="_blank">
                  <Button
                    mode="dark"
                    onClick={() => {
                      if (
                        !project.rating.find(
                          (vote) => vote.user === stateUser.user._id
                        )
                      ) {
                        openModal();
                      }
                    }}
                  >
                    Visitar proyecto
                  </Button>
                </Link>
              </Skeleton>
              <Skeleton w="500px" h="30px">
                {project && (
                  <Stars averageRating={project?.averageRating} visible />
                )}
              </Skeleton>
            </div>
            <Comments />
          </div>
        </>
      </div>
    </SkeletonProvider>
  );
};

export default Project;
