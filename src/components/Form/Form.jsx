import "./Form.css";

const Form = ({
  handleSubmit,
  children,
  colorScheme = "light",
}) => {
  return (
    <form className={`common-form scheme-${colorScheme}`} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
