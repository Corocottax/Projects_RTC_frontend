import { createContext, useEffect, useState } from "react";
import "./Select.css";
import { useFormContext } from 'react-hook-form';

export const SelectContext = createContext();

const Select = ({
  mode = "light",
  children,
  maxHeight,
  maxWidth,
  name,
  options
}) => {
  const [openned, setOpenned] = useState(false);
  const [optionSelected, setOptionSelected] = useState();
  const { register, setValue } = useFormContext();
  

  useEffect(() => {
    if (optionSelected) {
      setValue(name, optionSelected.text);
    }
  }, [optionSelected]);

  return (
    <div
      className={`common_select ${mode} ${openned ? "openned" : "closed"}`}
      onClick={() => setOpenned(!openned)}
      style={{ maxWidth: maxWidth && maxWidth }}
    >
      <input {...register(name, options)} value={optionSelected?.text || ""} disabled/>
      <img src={`/assets/icons/arrow-${mode}.png`} />
      <SelectContext.Provider value={{ mode, setOptionSelected }}>
        <ul
          className="options"
          style={{
            height:
              openned && children ? `${children?.length * 60 || 60}px` : "0px",
            maxHeight: maxHeight && maxHeight,
          }}
        >
          {children}
        </ul>
      </SelectContext.Provider>
    </div>
  );
};

export default Select;
