import { createContext, useEffect, useState } from "react";
import "./Select.css";
import { useFormContext } from "react-hook-form";

export const SelectContext = createContext();

const Select = ({
  mode = "light",
  children,
  maxHeight,
  maxWidth,
  name,
  options,
  className,
  defaultValue,
}) => {
  const [openned, setOpenned] = useState(false);
  const [optionSelected, setOptionSelected] = useState();
  const { register, setValue, getValues } = useFormContext();

  useEffect(() => {
    if (optionSelected) {
      setValue(name, optionSelected.text);
    }
  }, [optionSelected]);

  useEffect(() => {
    if (!getValues(name)) {
      setOptionSelected();
    }
    console.log(getValues(name));
  }, [getValues(name)]);

  return (
    <div
      className={`common_select ${className} ${mode} ${
        openned ? "openned" : "closed"
      }`}
      onClick={() => setOpenned(!openned)}
      style={{ maxWidth: maxWidth && maxWidth }}
    >
      <input
        {...register(name, options)}
        value={
          optionSelected?.text
            ? optionSelected?.text
            : defaultValue
            ? defaultValue
            : ""
        }
        disabled
      />
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
