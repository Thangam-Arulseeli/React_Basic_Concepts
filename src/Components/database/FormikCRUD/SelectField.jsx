import { Field, ErrorMessage } from "formik";

const SelectField = ({ label, name, options }) => (
  <div>
    <label>{label}</label><br />
    <Field as="select" name={name}>
      <option value="">Select</option>
      {options.map(opt => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </Field>
    <div style={{ color: "red" }}>
      <ErrorMessage name={name} />
    </div>
  </div>
);

export default SelectField;

