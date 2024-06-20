import { useForm } from "react-hook-form";
import FieldForm from "../FieldForm/FieldForm";
import Form from "../Form/Form";
import "./CreateProject.css";
import { useContext, useEffect } from "react";
import { UsersContext } from "../../providers/UsersProvider";
import { getRepositories } from "../../reducers/users/users.actions";
import Select from "../Select/Select";
import Option from "../Option/Option";

//TODO: REFACTORIZAR

const CreateProject = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { state, dispatch } = useContext(UsersContext);
  const { user, repositories } = state;

  useEffect(() => {
    getRepositories(dispatch, user);
  }, [user]);

  const publishProyect = async (data) => {
    const obj = {
      title: data.title,
      nameUser: user.name,
      description: data.description,
      link: "asdf",
      deployLink: "asldfkl",
      type: data.type,
      user: user._id,
    };

    const send = JSON.stringify(obj);

    const res = await fetch("http://localhost:3000/api/v1/projects/", {
      method: "POST",
      body: send,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });

    const response = await res.json();
    console.log(response);
  };

  return (
    <div>
      <Form
        buttonText="Subir proyecto"
        handleSubmit={handleSubmit((data) => publishProyect(data))}
      >
        <FieldForm
          labelText="Título"
          ph="Título de tu proyecto"
          register={() => register("title", { required: true })}
        />
        <FieldForm
          labelText="Descripción"
          ph="Escribe aquí la descripción..."
          register={() => register("description", { required: true })}
        />
        <div>
          <label>Número de proyecto en la escuela</label>
          <Select maxHeight="170px" maxWidth="100px">
            {Array.from({ length: 13 }, (_, i) => i + 1).map((el) => (
              <Option value={el}>{el}</Option>
            ))}
          </Select>
          {/* <select {...register("type")}>{fillProjectsNumbers(13)}</select> */}
        </div>
        <div>
          <label>Repositorio</label>
          <Select maxHeight="180px" maxWidth="300px">
            {repositories?.map((repository) => (
              <Option value={repository.id}>{repository.name}</Option>
            ))}
          </Select>
        </div>
      </Form>
    </div>
  );
};

export default CreateProject;
