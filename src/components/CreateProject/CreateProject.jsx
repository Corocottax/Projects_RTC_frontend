import { useForm } from "react-hook-form";
import FieldForm from "../FieldForm/FieldForm";
import Form from "../Form/Form";
import "./CreateProject.css";
import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../providers/UsersProvider";
import { getRepositories } from "../../reducers/users/users.actions";
import Select from "../Select/Select";
import Option from "../Option/Option";
import Button from "../Button/Button";
import InputFile from "../InputFile/InputFile";

//TODO: REFACTORIZAR

const CreateProject = () => {
  const { register, handleSubmit, formState, getValues } = useForm();
  const { state, dispatch } = useContext(UsersContext);
  const { user, repositories } = state;
  const [step, setStep] = useState(1);
  const { errors } = formState;

  useEffect(() => {
    getRepositories(dispatch, user);
  }, [user]);

  const publishProyect = async (data) => {
    console.log(data);
    /* const obj = {
      title: data.title,
      nameUser: user.name,
      description: data.description,
      link: "asdf",
      deployLink: "asldfkl",
      type: data.type,
      user: user._id,
    }; */

    /* const send = JSON.stringify(obj);

    const res = await fetch("http://localhost:3000/api/v1/projects/", {
      method: "POST",
      body: send,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });

    const response = await res.json();
    console.log(response); */
  };

  useEffect(() => {
    console.log(formState.dirtyFields);
  }, [formState])

  return (
    <div>
      <Form
        className="create_project_form"
        handleSubmit={handleSubmit((data) => publishProyect(data))}
      >
        <img src="/assets/rtc.webp" />
        {step === 1 && (
          <>
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
          </>
        )}
        {step === 2 && (
          <div className="step_2">
            <div>
              <label>Número de proyecto</label>
              <Select maxHeight="200px" maxWidth="300px">
                {Array.from({ length: 13 }, (_, i) => i + 1).map((el) => (
                  <Option value={el}>{el}</Option>
                ))}
              </Select>
            </div>
            <div>
              <label>Repositorio</label>
              <Select maxHeight="200px" maxWidth="300px">
                {repositories?.map((repository) => (
                  <Option value={repository.id}>{repository.name}</Option>
                ))}
              </Select>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="step_3">
            <h3>Sube al menos una imagen para tu proyecto</h3>
            <div>
              <InputFile
                num="1"
                register={() => register("firstImg", { required: true })}
                registerName="firstImg"
                formState={formState}
                getValues={getValues}
              />
              <InputFile
                num="2"
                register={() => register("secondImg")}
                registerName="secondImg"
                formState={formState}
                getValues={getValues}
              />
              <InputFile
                num="3"
                register={() => register("thirdImg")}
                registerName="thirdImg"
                formState={formState}
                getValues={getValues}
              />
            </div>
          </div>
        )}
        <div className="buttons_create_project">
          {step > 1 && (
            <Button onClick={() => setStep(step - 1)} className="previous">
              Anterior
            </Button>
          )}
          {step < 3 ? (
            <Button onClick={() => setStep(step + 1)} className="next">
              Siguiente
            </Button>
          ) : (
            <Button>Subir proyecto</Button>
          )}
        </div>
      </Form>
    </div>
  );
};

export default CreateProject;
