import { useForm } from "react-hook-form";
import "./Login.css";
import Form from "../../components/Form/Form";
import FieldForm from "../../components/FieldForm/FieldForm";
import { login } from "../../reducers/users/users.actions";
import { useContext } from "react";
import { UsersContext } from "../../providers/UsersProvider";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { state, dispatch } = useContext(UsersContext);

  console.log(state);

  return (
    <div id="login">
      <Form handleSubmit={handleSubmit((data) => login(data, dispatch))} buttonText="Login">
        <FieldForm
          labelText="Email"
          register={() => register("email")}
          ph="email@email.com"
        />
        <FieldForm
          labelText="Contraseña"
          register={() => register("password")}
          type="password"
          ph="*****"
        />
      </Form>
    </div>
  );
};

export default Login;
