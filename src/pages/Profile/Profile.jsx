import { useContext, useState } from "react";
import { logout } from "../../reducers/users/users.actions";
import "./Profile.css";
import { UsersContext } from "../../providers/UsersProvider";
import { useNavigate } from "react-router-dom";
import BestProject from "../../components/BestProject/BestProject";
import ImgWrp from "../../components/ImgWrp/ImgWrp";
import CreateProject from "../../components/CreateProject/CreateProject";
import FlipCard from "../../components/FlipCard/FlipCard";
import FlipCardFront from "../../components/FlipCardFront/FlipCardFront";
import FlipCardBack from "../../components/FlipCardBack/FlipCardBack";
import Button from "../../components/Button/Button";

const Profile = () => {
  const { state, dispatch } = useContext(UsersContext);
  const navigate = useNavigate();
  const { user } = state;
  const [toggle, setToggle] = useState(true);

  return (
    <div id="profile">
      <Button
        className="logout"
        onClick={() => logout(dispatch, navigate)}
        mode="dark"
      >
        Logout
      </Button>
      <FlipCard minW="370px" w="40%" h="550px" toggle={toggle}>
        <FlipCardFront>
          <div className="info_user">
            <ImgWrp w="250px" h="250px" borderRadius="100%">
              <img src={user?.avatar} alt="perfil del usuario" />
            </ImgWrp>
            <h3>{user?.email}</h3>
            <h3>{user?.name}</h3>
            <h3>{user?.lastName}</h3>
            <div className="projects">
              {user?.projects.map((project) => (
                <BestProject project={project} key={project._id} />
              ))}
            </div>
          </div>
        </FlipCardFront>
        <FlipCardBack>
          <CreateProject />
        </FlipCardBack>
      </FlipCard>
      <FlipCard toggle={toggle} w="40%" h="50px">
        <FlipCardFront>
          <Button mode="dark" onClick={() => setToggle(false)}>
            Subir un proyecto
          </Button>
        </FlipCardFront>
        <FlipCardBack>
          <Button border onClick={() => setToggle(true)}>
            Ver mi perfil
          </Button>
        </FlipCardBack>
      </FlipCard>
    </div>
  );
};

export default Profile;
