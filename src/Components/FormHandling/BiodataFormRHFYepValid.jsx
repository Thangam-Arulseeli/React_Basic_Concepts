/*
React Hook Form with Yup Validation
🔹 Why combine RHF + Yup?
•	RHF → fast, minimal re-renders
•	Yup → schema-based, reusable validation
•	Clean separation of UI & validation logic

📦 1. Installation
npm install react-hook-form yup @hookform/resolvers

📌 2. Key Concepts
🔹 yupResolver
Connects Yup schema with React Hook Form.
import { yupResolver } from "@hookform/resolvers/yup";


🔹 3. Validation Flow
Form Input → RHF → Yup Schema → Errors


🔍 4. How Validation Works 
1.	User submits form
2.	RHF sends values to Yup schema
3.	Yup validates data
4.	Errors returned to formState.errors
5.	Errors displayed near fields

🔑 5. Interview Important Points
✔ RHF uses uncontrolled components
✔ Yup handles schema-based validation
✔ resolver connects Yup with RHF
✔ Fewer re-renders than Formik
✔ Best for large & complex forms

Formik vs RHF + Yup (One-line)
Formik uses controlled components, whereas React Hook Form with Yup provides faster, 
schema-based validation using uncontrolled components.



// Yup Validation Schema
import * as Yup from "yup";

const schema = Yup.object({
  name: Yup.string().required("Name is required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  age: Yup.number()
    .positive("Age must be positive")
    .integer("Age must be an integer")
    .required("Age is required"),

  gender: Yup.string().required("Select gender"),

  city: Yup.string().required("Select city"),

  skills: Yup.array()
    .min(1, "Select at least one skill"),

  agree: Yup.boolean()
    .oneOf([true], "You must accept the terms")
});
*/


// Complete RHF + Yup Biodata Form
// 📄 RHFYupBiodataForm.jsx

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// Validation Schema
const schema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Min 6 characters").required("Password required"),
  age: Yup.number().required("Age required"),
  gender: Yup.string().required("Select gender"),
  city: Yup.string().required("Select city"),
  skills: Yup.array().min(1, "Select at least one skill"),
  agree: Yup.boolean().oneOf([true], "Accept terms")
});

function BiodataFormRHFYepValid() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("Form submitted successfully");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>RHF + Yup Biodata Form</h2>

      {/* Text */}
      Name:
      <input {...register("name")} />
      <p>{errors.name?.message}</p>

      {/* Email */}
      Email:
      <input {...register("email")} />
      <p>{errors.email?.message}</p>

      {/* Password */}
      Password:
      <input type="password" {...register("password")} />
      <p>{errors.password?.message}</p>

      {/* Number */}
      Age:
      <input type="number" {...register("age")} />
      <p>{errors.age?.message}</p>

      {/* Radio */}
      Gender:
      <input type="radio" value="Male" {...register("gender")} /> Male
      <input type="radio" value="Female" {...register("gender")} /> Female
      <p>{errors.gender?.message}</p>

      {/* Checkbox group */}
      Skills:
      <input type="checkbox" value="Java" {...register("skills")} /> Java
      <input type="checkbox" value="React" {...register("skills")} /> React
      <input type="checkbox" value="Python" {...register("skills")} /> Python
      <p>{errors.skills?.message}</p>

      {/* Select */}
      City:
      <select {...register("city")}>
        <option value="">Select</option>
        <option>Chennai</option>
        <option>Coimbatore</option>
      </select>
      <p>{errors.city?.message}</p>

      {/* Agreement */}
      <input type="checkbox" {...register("agree")} /> I Agree
      <p>{errors.agree?.message}</p>

      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default BiodataFormRHFYepValid;




