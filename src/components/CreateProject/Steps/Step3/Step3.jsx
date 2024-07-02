import InputFile from "../../../InputFile/InputFile";
import "./Step3.css";

const Step3 = ({ register, formState, getValues }) => {
  return (
    <div className="step_3">
      <h3>Sube al menos una imagen para tu proyecto</h3>
      <div>
        <InputFile
          num="1"
          register={() =>
            register("firstImg", {
              required: "Mínimo tienes que subir una imagen de tu proyecto",
            })
          }
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
  );
};

export default Step3;
