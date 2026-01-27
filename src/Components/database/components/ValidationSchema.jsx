import * as Yup from "yup";

export const biodataSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  age: Yup.number().positive().required("Age required"),
  gender: Yup.string().required("Gender required"),
  email: Yup.string().email("Invalid email").required("Email required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required("Phone required"),
  qualification: Yup.string().required("Qualification required"),
  skills: Yup.array().min(1, "Select at least one skill"),
  address: Yup.string().required("Address required")
});

