import "./FieldForm.css";

const FieldForm = ({
  register,
  labelText,
  type = "text",
  ph,
  className,
  fnc = () => {},
  value = "",
  controlledInput
}) => {
  return (
    <div className={`field-form ${className}`}>
      <label>{labelText}</label>
      {controlledInput ? (
        <input
          {...register()}
          type={type}
          placeholder={ph}
          onInput={fnc}
          autoComplete="off"
          value={value}
        />
      ) : (
        <input
          {...register()}
          type={type}
          placeholder={ph}
          onInput={fnc}
          autoComplete="off"
        />
      )}
    </div>
  );
};

export default FieldForm;
