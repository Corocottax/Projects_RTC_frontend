import { useForm, FormProvider } from "react-hook-form";
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
  const methods = useForm();
  const { register, handleSubmit, formState, getValues } = methods;
  const { state, dispatch } = useContext(UsersContext);
  const { user, repositories } = state;
  const [step, setStep] = useState(1);
  const { errors } = formState;

  useEffect(() => {
    getRepositories(dispatch, user);
  }, [user]);

  const publishProyect = async (data) => {
    const repository = repositories.find(
      (repository) => repository.name === data.repository
    );

    const body = new FormData();

    body.append("title", data.title);
    body.append("description", data.description);
    body.append("link", repository.html_url);
    body.append("deploy", repository.homepage);
    body.append("type", data.type);
    body.append("imgs", data.firstImg[0]);
    body.append("imgs", data.secondImg[0] || "");
    body.append("imgs", data.thirdImg[0] || "");
    body.append("vote", 5);

    const res = await fetch("http://localhost:3000/api/v1/projects/", {
      method: "POST",
      body: body,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const response = await res.json();
    console.log(response);
  };

  return (
    <div>
      <FormProvider {...methods}>
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
                <Select maxHeight="200px" maxWidth="300px" name="type">
                  {Array.from({ length: 13 }, (_, i) => i + 1).map((el) => (
                    <Option value={el} key={el}>
                      {el}
                    </Option>
                  ))}
                </Select>
              </div>
              <div>
                <label>Repositorio</label>
                <Select maxHeight="200px" maxWidth="300px" name="repository">
                  {repositories?.map((repository) => (
                    <Option value={repository.id} key={repository.id}>
                      {repository.name}
                    </Option>
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
              <Button type="submit">Subir proyecto</Button>
            )}
          </div>
        </Form>
      </FormProvider>
    </div>
  );
};

export default CreateProject;
