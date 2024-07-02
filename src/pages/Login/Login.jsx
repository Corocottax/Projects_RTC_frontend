import { useForm } from "react-hook-form";
import "./Login.css";
import Form from "../../components/Form/Form";
import FieldForm from "../../components/FieldForm/FieldForm";
import { login } from "../../reducers/users/users.actions";
import { useContext, useEffect } from "react";
import { UsersContext } from "../../providers/UsersProvider";
import { useNavigate } from "react-router-dom";
import { AlertContext } from "../../providers/AlertProvider";
import Button from "../../components/Button/Button";
import { useFormErrors } from "../../utils/customHooks/useFormErrors";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { state, dispatch } = useContext(UsersContext);
  const { setAlert } = useContext(AlertContext);
  const { loading } = state;
  useFormErrors(errors);
  
  return (
    <div id="login">
      <Form
        handleSubmit={handleSubmit((data) =>
          login(data, dispatch, navigate, setAlert)
        )}
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
        <Button loading={loading} type="submit">Login</Button>
      </Form>
    </div>
  );
};

export default Login;
