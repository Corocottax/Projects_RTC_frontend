import "./FieldForm.css";

const FieldForm = ({ register, labelText, type = "text", ph, className }) => {
  return (
    <div className={`field-form ${className}`}>
      <label>{labelText}</label>
      <input {...register()} type={type} placeholder={ph} />
    </div>
  );
};

export default FieldForm;