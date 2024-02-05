/* eslint-disable react/prop-types */
const FormRow = ({ type, name, value, handleChange, labelText, pattern }) => {
  let placeholderText;

  switch (name) {
    case "name":
      placeholderText = "Bruce";
      break;
    case "lastName":
      placeholderText = "Wayne";
      break;
    case "password":
      placeholderText = "";
      break;
    case "email":
      placeholderText = "bruce_wayne@winc.com";
      break;
    default:
      placeholderText = "Enter value";
  }

  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-input"
        placeholder={placeholderText}
        pattern={pattern}
      />
    </div>
  );
};

export default FormRow;
