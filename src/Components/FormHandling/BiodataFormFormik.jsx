/*
🔹 1. Formik
📌 What is Formik?
Formik is a third party state-based React form library that manages:
•	form state
•	validation
•	errors
•	submission
Formik uses controlled components internally.

✅ Formik – Key Concepts
•	Formik / useFormik
•	initialValues
•	handleChange
•	handleSubmit
•	errors
•	touched
•	Validation using custom function or Yup

🔹 Formik Biodata Form Example
📦 Install
npm install formik yup

*/

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function BiodataFormFormik() {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      gender: "",
      skills: [],
      city: "",
      about: "",
      agree: false
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email required"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Password required"),
      gender: Yup.string().required("Select gender"),
      city: Yup.string().required("Select city"),
      agree: Yup.boolean().oneOf([true], "Accept terms")
    }),

    onSubmit: (values) => {
      console.log(values);
      alert("Form Submitted Successfully");
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Formik Biodata Form</h2>

      Name:
      <input
        type="text"
        name="name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.name && formik.errors.name}
      <br />

      Email:
      <input
        type="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email}
      <br />

      Password:
      <input
        type="password"
        name="password"
        onChange={formik.handleChange}
      />
      {formik.errors.password}
      <br />

      Gender:
      <input
        type="radio"
        name="gender"
        value="Male"
        onChange={formik.handleChange}
      /> Male
      <input
        type="radio"
        name="gender"
        value="Female"
        onChange={formik.handleChange}
      /> Female
      {formik.errors.gender}
      <br />

      City:
      <select name="city" onChange={formik.handleChange}>
        <option value="">Select</option>
        <option>Chennai</option>
        <option>Coimbatore</option>
      </select>
      {formik.errors.city}
      <br />

      About:
      <textarea name="about" onChange={formik.handleChange}></textarea>
      <br />

      <input
        type="checkbox"
        name="agree"
        onChange={formik.handleChange}
      /> I Agree
      {formik.errors.agree}
      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default BiodataFormFormik;
