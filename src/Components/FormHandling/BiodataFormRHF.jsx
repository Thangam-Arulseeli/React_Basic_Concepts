/*
🔹  React Hook Form (RHF)
📌 What is React Hook Form?
React Hook Form is a performance-optimized form library that uses:
•	uncontrolled components
•	refs
•	minimal re-renders

✅ RHF – Key Concepts
•	useForm()
•	register
•	handleSubmit
•	formState.errors
•	Optional Yup integration

🔹 React Hook Form Biodata Example
📦 Install
npm install react-hook-form

*/

import React from "react";
import { useForm } from "react-hook-form";

function BiodataFormRHF() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Form Submitted Successfully");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>React Hook Form - Biodata</h2>

      Name:
      <input {...register("name", { required: "Name required" })} />
      {errors.name && errors.name.message}
      <br />

      Email:
      <input
        {...register("email", {
          required: "Email required",
          pattern: {
            value: /^[^@]+@[^@]+\.[^@]+$/,
            message: "Invalid email"
          }
        })}
      />
      {errors.email && errors.email.message}
      <br />

      Password:
      <input
        type="password"
        {...register("password", {
          minLength: { value: 6, message: "Min 6 chars" }
        })}
      />
      {errors.password && errors.password.message}
      <br />

      Gender:
      <input type="radio" value="Male" {...register("gender", { required: "Select gender" })} /> Male
      <input type="radio" value="Female" {...register("gender")} /> Female
      {errors.gender && errors.gender.message}
      <br />

      City:
      <select {...register("city", { required: "Select city" })}>
        <option value="">Select</option>
        <option>Chennai</option>
        <option>Coimbatore</option>
      </select>
      {errors.city && errors.city.message}
      <br />

      <input
        type="checkbox"
        {...register("agree", { required: "Accept terms" })}
      /> I Agree
      {errors.agree && errors.agree.message}
      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default BiodataFormRHF;

