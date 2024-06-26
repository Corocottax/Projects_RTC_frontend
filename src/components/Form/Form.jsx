import "./Form.css";

const Form = ({
  handleSubmit,
  children,
  colorScheme = "light",
  className = ""
}) => {
  return (
    <form className={`common-form scheme-${colorScheme} ${className}`} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
