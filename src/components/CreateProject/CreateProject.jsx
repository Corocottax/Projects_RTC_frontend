import { useForm, FormProvider } from "react-hook-form";
import Form from "../Form/Form";
import "./CreateProject.css";
import { useContext, useEffect } from "react";
import { UsersContext } from "../../providers/UsersProvider";
import { getRepositories } from "../../reducers/users/users.actions";
import { AlertContext } from "../../providers/AlertProvider";
import { postProject } from "../../reducers/projects/projects.actions";
import { useFormErrors } from "../../utils/customHooks/useFormErrors";
import Step1 from "./Steps/Step1/Step1";
import Step2 from "./Steps/Step2/Step2";
import Step3 from "./Steps/Step3/Step3";
import StepButtons from "../StepButtons/StepButtons";
import { useStepper } from "../../utils/customHooks/useStepper";
import { ProjectsContext } from "../../providers/ProjectsProvider";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
  const methods = useForm();
  const { register, handleSubmit, formState, getValues } = methods;
  const { state, dispatch } = useContext(UsersContext);
  const { dispatch: dispatchProjects } = useContext(ProjectsContext);
  const { user, repositories } = state;
  const { errors } = formState;
  const { setAlert } = useContext(AlertContext);
  useFormErrors(errors);
  const { step, next, previous } = useStepper({ limit: 3 });
  const navigate = useNavigate();

  useEffect(() => {
    getRepositories(dispatch, user);
  }, [user]);

  return (
    <div>
      <FormProvider {...methods}>
        <Form
          className="create_project_form"
          handleSubmit={handleSubmit((data) => {
            console.log(data);
            postProject(
              data,
              repositories,
              setAlert,
              next,
              errors,
              step,
              3,
              dispatchProjects,
              navigate
            );
          })}
        >
          <img src="/assets/rtc.webp" />
          {step === 1 && <Step1 register={register} />}
          {step === 2 && <Step2 repositories={repositories} />}
          {step === 3 && (
            <Step3
              getValues={getValues}
              formState={formState}
              register={register}
            />
          )}
          <StepButtons step={step} previous={previous} limit={3} />
        </Form>
      </FormProvider>
    </div>
  );
};

export default CreateProject;
