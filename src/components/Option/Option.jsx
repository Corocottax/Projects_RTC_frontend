import { useContext } from "react";
import "./Option.css";
import { SelectContext } from "../Select/Select";

const Option = ({ children, value }) => {
  const { mode, setOptionSelected } = useContext(SelectContext);

  return (
    <li
      className={`common_option ${mode}`}
      onClick={() => setOptionSelected({ text: children, value })}
    >
      {children}
    </li>
  );
};

export default Option;
