import { useForm } from "react-hook-form";
import FieldForm from "../FieldForm/FieldForm";
import Form from "../Form/Form";
import "./CreateProject.css";
import { useContext, useEffect } from "react";
import { UsersContext } from "../../providers/UsersProvider";
import { getRepositories } from "../../reducers/users/users.actions";
import { fillProjectsNumbers } from "../../utils/functions/printOptions";

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
        "Content-Type": "application/json"
      }
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
          <select {...register("type")}>{fillProjectsNumbers(13)}</select>
        </div>
        <div>
          <label>Repositorio</label>
          <select>
            {repositories?.map((repository) => (
              <option value={repository.id}>{repository.name}</option>
            ))}
          </select>
        </div>
      </Form>
    </div>
  );
};

export default CreateProject;
