import "./FieldForm.css";

const FieldForm = ({ register, labelText, type = "text", ph }) => {
  return (
    <div className="field-form">
      <label>{labelText}</label>
      <input {...register()} type={type} placeholder={ph} />
    </div>
  );
};

export default FieldForm;
