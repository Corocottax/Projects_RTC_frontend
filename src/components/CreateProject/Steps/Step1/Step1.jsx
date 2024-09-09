import FieldForm from "../../../FieldForm/FieldForm";
import "./Step1.css";

const Step1 = ({ register }) => {
  return (
    <>
      <FieldForm
        labelText="Título"
        ph="Título de tu proyecto"
        register={() =>
          register("title", {
            required: "El título del proyecto es requerido",
          })
        }
      />
      <FieldForm
        labelText="Descripción"
        ph="Escribe aquí la descripción..."
        register={() =>
          register("description", {
            required: "Debes introducir una descripción para tu proyecto",
          })
        }
      />
    </>
  );
};

export default Step1;
