import { FormProvider, useForm } from "react-hook-form";
import "./FilterProjects.css";
import Select from "../Select/Select";
import Option from "../Option/Option";
import Form from "../Form/Form";
import FieldForm from "../FieldForm/FieldForm";

const FilterProjects = () => {
  const methods = useForm();

  const { register, handleSubmit, formState, getValues } = methods;

  return (
    <FormProvider {...methods}>
      <Form className="filter_projects">
        <FieldForm className="search_by_alumn" register={() => register("nameUser")} ph="Buscar por alumno"/>
        <div>
          <Select maxHeight="200px" maxWidth="300px" name="type" className="search_select" defaultValue="Número de proyecto">
            {Array.from({ length: 13 }, (_, i) => i + 1).map((el) => (
              <Option value={el} key={el}>
                {el}
              </Option>
            ))}
          </Select>
        </div>
        <div>
          <Select maxHeight="200px" maxWidth="300px" name="repository"  className="search_select" defaultValue="Puntuación mínima">
            {Array.from({ length: 5 }, (_, i) => i + 1).map((el) => (
              <Option value={el} key={el}>
                {el}
              </Option>
            ))}
          </Select>
        </div>
      </Form>
    </FormProvider>
  );
};

export default FilterProjects;
