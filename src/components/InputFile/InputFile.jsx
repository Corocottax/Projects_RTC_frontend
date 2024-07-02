import { useEffect, useState } from "react";
import "./InputFile.css";

const InputFile = ({ num, register, formState, registerName, getValues }) => {
  const [file, setFile] = useState("/assets/icons/upload.png");

  const selectFile = (e) => {
    const file = e.target.files[0];
    setFile(URL.createObjectURL(file));
  };

  useEffect(() => {
    if (formState.dirtyFields?.[registerName]) {
      setFile(URL.createObjectURL(getValues(registerName)[0]));
    }
  }, []);

  return (
    <div className="input_file">
      <label htmlFor={`img_project_${num}`}>
        <img src={file} />
      </label>
      <input
        type="file"
        id={`img_project_${num}`}
        {...register()}
        onInput={selectFile}
      />
    </div>
  );
};

export default InputFile;
