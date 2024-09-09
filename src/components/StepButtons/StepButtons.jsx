import { useContext } from "react";
import Button from "../Button/Button";
import "./StepButtons.css";
import { ProjectsContext } from "../../providers/ProjectsProvider";

const StepButtons = ({ step, previous, limit }) => {

  const { state } = useContext(ProjectsContext);
  const { postProjectLoading } = state;

  return (
    <div className="step_buttons">
      {step > 1 && (
        <Button className="previous" onClick={previous}>
          Anterior
        </Button>
      )}
      {step < limit ? (
        <Button className="next" type="submit">
          Siguiente
        </Button>
      ) : (
        <Button type="submit" loading={postProjectLoading}>Subir proyecto</Button>
      )}
    </div>
  );
};

export default StepButtons;
