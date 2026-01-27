import { Field, ErrorMessage } from "formik";

const CheckboxGroup = ({ label, name, options }) => (
  <div>
    <label>{label}</label><br />
    {options.map(opt => (
      <label key={opt}>
        <Field type="checkbox" name={name} value={opt} /> {opt}
      </label>
    ))}
    <div style={{ color: "red" }}>
      <ErrorMessage name={name} />
    </div>
  </div>
);

export default CheckboxGroup;

