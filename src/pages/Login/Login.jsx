import { useForm } from "react-hook-form";
import "./Login.css";
import Form from "../../components/Form/Form";
import FieldForm from "../../components/FieldForm/FieldForm";
import { login } from "../../reducers/users/users.actions";
import { useContext, useEffect } from "react";
import { UsersContext } from "../../providers/UsersProvider";
import { useNavigate } from "react-router-dom";
import { AlertContext } from "../../providers/AlertProvider";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { state, dispatch } = useContext(UsersContext);
  const { setAlert } = useContext(AlertContext);

  //TODO: REFACTORIZAR USEEFFECT
  useEffect(() => {
    if (Object.keys(errors).length) {
      setAlert({
        message: errors[Object.keys(errors)[0]].message,
        type: "error",
      });
    } else {
      setAlert(null);
    }
  }, [Object.keys(errors).length]);

  return (
    <div id="login">
      <Form
        handleSubmit={handleSubmit((data) =>
          login(data, dispatch, navigate, setAlert)
        )}
        buttonText="Login"
      >
        <FieldForm
          labelText="Email"
          register={() =>
            register("email", {
              required: "El email es requerido",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "El email tiene que tener un formato válido",
              },
            })
          }
          ph="email@email.com"
        />
        <FieldForm
          labelText="Contraseña"
          register={() =>
            register("password", { required: "La contraseña es requerida" })
          }
          type="password"
          ph="*****"
        />
      </Form>
    </div>
  );
};

export default Login;
