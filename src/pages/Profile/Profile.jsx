import { useContext } from "react";
import { logout } from "../../reducers/users/users.actions";
import "./Profile.css";
import { UsersContext } from "../../providers/UsersProvider";
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const { state, dispatch } = useContext(UsersContext);
    const navigate = useNavigate();

  return (
    <div>
        <button onClick={() => logout(dispatch, navigate)}>Logout</button>
    </div>
  )
}

export default Profile