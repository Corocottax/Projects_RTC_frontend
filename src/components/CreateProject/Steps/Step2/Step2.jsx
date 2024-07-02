import Option from "../../../Option/Option";
import Select from "../../../Select/Select";
import "./Step2.css";

const Step2 = ({ repositories }) => {
  return (
    <div className="step_2">
      <div>
        <label>Número de proyecto</label>
        <Select
          maxHeight="200px"
          maxWidth="300px"
          name="type"
          options={{
            required: "Elige el número de proyecto en el curso",
          }}
        >
          {Array.from({ length: 13 }, (_, i) => i + 1).map((el) => (
            <Option value={el} key={el}>
              {el}
            </Option>
          ))}
        </Select>
      </div>
      <div>
        <label>Repositorio</label>
        <Select
          maxHeight="200px"
          maxWidth="300px"
          name="repository"
          options={{
            required: "Selecciona el repositorio de tu cuenta de GitHub",
          }}
        >
          {repositories?.map((repository) => (
            <Option value={repository.id} key={repository.id}>
              {repository.name}
            </Option>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default Step2;
