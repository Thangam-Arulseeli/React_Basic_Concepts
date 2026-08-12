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

//------------------------------------------------------------------------------------------------


// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// function BiodataFormFormik() {

//   // --------------------------------------------------
//   // Formik configuration
//   // --------------------------------------------------
//   const formik = useFormik({

//     // --------------------------------------------------
//     // 1. Initial values
//     // These values are used to initialize the form fields.
//     // --------------------------------------------------
//     initialValues: {
//       name: "",
//       email: "",
//       password: "",
//       gender: "",
//       skills: [],
//       city: "",
//       about: "",
//       agree: false
//     },

//     // --------------------------------------------------
//     // 2. Validation Schema
//     // Yup is used to define validation rules for each field.
//     // --------------------------------------------------
//     validationSchema: Yup.object({

//       // Name is mandatory
//       name: Yup.string()
//         .trim()
//         .required("Name is required"),

//       // Email must be in a valid email format
//       email: Yup.string()
//         .email("Invalid email address")
//         .required("Email is required"),

//       // Password must contain at least 6 characters
//       password: Yup.string()
//         .min(6, "Password must be at least 6 characters")
//         .required("Password is required"),

//       // Gender must be selected
//       gender: Yup.string()
//         .required("Please select gender"),

//       // At least one skill must be selected
//       skills: Yup.array()
//         .min(1, "Please select at least one skill"),

//       // City must be selected
//       city: Yup.string()
//         .required("Please select a city"),

//       // About field is optional, but limited to 500 characters
//       about: Yup.string()
//         .max(500, "About must not exceed 500 characters"),

//       // Checkbox must be checked
//       agree: Yup.boolean()
//         .oneOf([true], "You must accept the terms and conditions")
//     }),

//     // --------------------------------------------------
//     // 3. Submit
//     // This function executes only when validation succeeds.
//     // --------------------------------------------------
//     onSubmit: (values) => {
//       console.log("Form Values:", values);

//       alert("Form Submitted Successfully!");
//     }
//   });


//   return (
//     <form onSubmit={formik.handleSubmit}>

//       <h2>Formik Biodata Form</h2>


//       {/* ==================================================
//           NAME
//           ================================================== */}
//       <div>
//         <label>Name:</label>

//         <input
//           type="text"
//           name="name"
//           value={formik.values.name}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />

//         {/* Display error only after the user touches the field */}
//         {formik.touched.name && formik.errors.name && (
//           <span>{formik.errors.name}</span>
//         )}
//       </div>


//       {/* ==================================================
//           EMAIL
//           ================================================== */}
//       <div>
//         <label>Email:</label>

//         <input
//           type="email"
//           name="email"
//           value={formik.values.email}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />

//         {formik.touched.email && formik.errors.email && (
//           <span>{formik.errors.email}</span>
//         )}
//       </div>


//       {/* ==================================================
//           PASSWORD
//           ================================================== */}
//       <div>
//         <label>Password:</label>

//         <input
//           type="password"
//           name="password"
//           value={formik.values.password}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />

//         {formik.touched.password && formik.errors.password && (
//           <span>{formik.errors.password}</span>
//         )}
//       </div>


//       {/* ==================================================
//           GENDER - RADIO BUTTONS
//           ================================================== */}
//       <div>
//         <label>Gender:</label>

//         <input
//           type="radio"
//           name="gender"
//           value="Male"
//           checked={formik.values.gender === "Male"}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         Male

//         <input
//           type="radio"
//           name="gender"
//           value="Female"
//           checked={formik.values.gender === "Female"}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         Female

//         {formik.touched.gender && formik.errors.gender && (
//           <span>{formik.errors.gender}</span>
//         )}
//       </div>


//       {/* ==================================================
//           SKILLS - MULTIPLE CHECKBOXES
//           ================================================== */}
//       <div>
//         <label>Skills:</label>

//         <br />

//         <label>
//           <input
//             type="checkbox"
//             name="skills"
//             value="Java"
//             checked={formik.values.skills.includes("Java")}
//             onChange={formik.handleChange}
//           />
//           Java
//         </label>

//         <label>
//           <input
//             type="checkbox"
//             name="skills"
//             value="React"
//             checked={formik.values.skills.includes("React")}
//             onChange={formik.handleChange}
//           />
//           React
//         </label>

//         <label>
//           <input
//             type="checkbox"
//             name="skills"
//             value="Python"
//             checked={formik.values.skills.includes("Python")}
//             onChange={formik.handleChange}
//           />
//           Python
//         </label>

//         {formik.touched.skills && formik.errors.skills && (
//           <span>{formik.errors.skills}</span>
//         )}
//       </div>


//       {/* ==================================================
//           CITY - SELECT
//           ================================================== */}
//       <div>
//         <label>City:</label>

//         <select
//           name="city"
//           value={formik.values.city}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         >
//           <option value="">Select City</option>
//           <option value="Chennai">Chennai</option>
//           <option value="Coimbatore">Coimbatore</option>
//           <option value="Madurai">Madurai</option>
//         </select>

//         {formik.touched.city && formik.errors.city && (
//           <span>{formik.errors.city}</span>
//         )}
//       </div>


//     <label>About:</label>
//         <textarea
//           name="about"
//           value={formik.values.about}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />

//         {formik.touched.about && formik.errors.about && (
//           <span>{formik.errors.about}</span>
//         )}
      

//       {/* ==================================================
//           AGREEMENT - CHECKBOX
//           ================================================== */}
//       <div>
//         <label>
//           <input
//             type="checkbox"
//             name="agree"
//             checked={formik.values.agree}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//           />
//           I Agree
//         </label>

//         {formik.touched.agree && formik.errors.agree && (
//           <span>{formik.errors.agree}</span>
//         )}
//       </div>


//       <br />


//       {/* ==================================================
//           SUBMIT BUTTON
//           Formik handles the submit event through handleSubmit.
//           ================================================== */}
//       <button type="submit">
//         Submit
//       </button>

//     </form>
//   );
// }

// export default BiodataFormFormik;

