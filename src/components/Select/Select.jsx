import { createContext, useState } from "react";
import "./Select.css";

export const SelectContext = createContext();

const Select = ({ mode = "light", children, maxHeight, maxWidth }) => {
  const [openned, setOpenned] = useState(false);
  const [optionSelected, setOptionSelected] = useState();

  return (
    <div
      className={`common_select ${mode} ${openned ? "openned" : "closed"}`}
      onClick={() => setOpenned(!openned)}
      style={{ maxWidth: maxWidth && maxWidth }}
    >
      <p>{optionSelected?.text}</p>
      <img src={`/assets/icons/arrow-${mode}.png`} />
      <SelectContext.Provider value={{ mode, setOptionSelected }}>
        <ul
          className="options"
          style={{
            height:
              openned && children ? `${children?.length * 60 || 60}px` : "0px",
            maxHeight: maxHeight && maxHeight
          }}
        >
          {children}
        </ul>
      </SelectContext.Provider>
    </div>
  );
};

export default Select;
