import Button from "../Button/Button";
import "./Form.css";

const Form = ({
  handleSubmit,
  children,
  buttonText,
  colorScheme = "light",
}) => {
  return (
    <form className={`common-form scheme-${colorScheme}`} onSubmit={handleSubmit}>
      {children}
      <Button>{buttonText}</Button>
    </form>
  );
};

export default Form;
