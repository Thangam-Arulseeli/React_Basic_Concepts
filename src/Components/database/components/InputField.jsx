import { Field, ErrorMessage } from "formik";

const InputField = ({ label, ...props }) => (
  <div>
    <label>{label}</label><br />
    <Field {...props} />
    <div style={{ color: "red" }}>
      <ErrorMessage name={props.name} />
    </div>
  </div>
);

export default InputField;

