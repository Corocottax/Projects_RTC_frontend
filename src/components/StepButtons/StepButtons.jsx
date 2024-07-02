import Button from "../Button/Button";
import "./StepButtons.css";

const StepButtons = ({ step, previous, limit }) => {

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
        <Button type="submit">Subir proyecto</Button>
      )}
    </div>
  );
};

export default StepButtons;
