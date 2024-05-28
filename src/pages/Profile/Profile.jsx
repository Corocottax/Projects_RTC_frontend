import { useContext } from "react";
import { logout } from "../../reducers/users/users.actions";
import "./Profile.css";
import { UsersContext } from "../../providers/UsersProvider";
import { useNavigate } from "react-router-dom";
import BestProject from "../../components/BestProject/BestProject";
import ImgWrp from "../../components/ImgWrp/ImgWrp";

const Profile = () => {
  const { state, dispatch } = useContext(UsersContext);
  const navigate = useNavigate();
  const { user } = state;

  console.log(user);

  return (
    <div id="profile">
      <button onClick={() => logout(dispatch, navigate)}>Logout</button>
      <ImgWrp w="250px" h="250px" borderRadius="100%">
        <img src={user?.avatar} alt="perfil del usuario"/>
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
  );
};

export default Profile;
