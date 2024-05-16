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
      <button>{buttonText}</button>
    </form>
  );
};

export default Form;
