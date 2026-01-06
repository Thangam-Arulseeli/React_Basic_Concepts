/*
Uncontrolled Components – Biodata Form with Validation and file upload
------------------------------------------------------
🔹 What is an Uncontrolled Component?

In uncontrolled components:
Form data is stored in the DOM, not in React state
React accesses values using useRef()
Validation is done on submit, not on every change
📌 Source of truth → DOM

🔹 Key Characteristics
-----------------------
✔ Uses useRef()
✔ No useState for inputs
✔ Fewer re-renders
✔ Simple forms
❌ Harder validation
❌ Not suitable for large/dynamic forms

🔹 When to Use?
Simple forms
Quick prototypes
Legacy / third-party integrations

How Validation Works:
--------------------
User clicks Submit
Values read using ref.current.value
Validation logic runs manually
Errors stored in a small state object
Errors displayed below fields

Controlled vs Uncontrolled (Quick Recall)
Feature	          Controlled	    Uncontrolled
Data stored	      React state   	DOM
Validation	      Easy	          Manual
Re-renders      	Many	          Few
Best for	        Large forms	    Simple forms

NOTE:
In uncontrolled components, form data is managed by the DOM and accessed using refs,
making them suitable for simple forms but less flexible for validation.

How File Upload Works (Uncontrolled)
const resume = resumeRef.current.files[0];


files → FileList

files[0] → first uploaded file

No useState for file input

Browser controls the file input

🔑 Important Interview Points

✔ File inputs are always uncontrolled
✔ value cannot be set programmatically for security
✔ Best accessed using ref.current.files
✔ Validation must be manual

🔄 Controlled vs Uncontrolled (File Upload)
--------------------------------------------
Feature	          Controlled	        Uncontrolled
File handling	    ❌ Not allowed    	✅ Allowed
Security	        Browser controlled	Browser controlled
Validation	      Custom	            Custom
Recommended     	❌	                 ✅

NOTE:
File upload inputs are handled as uncontrolled components in React and accessed using refs 
because their value cannot be controlled programmatically.

*/

//Complete Code: Uncontrolled Form with File Upload

import React, { useRef, useState } from "react";

function BiodataFormUncontrolledFileUpload() {
  // Refs
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const ageRef = useRef();
  const maleRef = useRef();
  const femaleRef = useRef();
  const cityRef = useRef();
  const resumeRef = useRef();
  const agreeRef = useRef();

  // Error state
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let tempErrors = {};

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const age = ageRef.current.value;

    const gender = maleRef.current.checked
      ? "Male"
      : femaleRef.current.checked
      ? "Female"
      : "";

    const city = cityRef.current.value;
    const resume = resumeRef.current.files[0];
    const agree = agreeRef.current.checked;

    // Validation
    if (!name) tempErrors.name = "Name is required";
    if (!email.includes("@")) tempErrors.email = "Invalid email";
    if (password.length < 6)
      tempErrors.password = "Minimum 6 characters required";
    if (!gender) tempErrors.gender = "Select gender";
    if (!city) tempErrors.city = "Select city";
    if (!resume) {
      tempErrors.resume = "Upload resume";
    } else if (!resume.name.endsWith(".pdf")) {
      tempErrors.resume = "Only PDF files allowed";
    }
    if (!agree) tempErrors.agree = "Accept terms";

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      const formData = {
        name,
        email,
        password,
        age,
        gender,
        city,
        resumeName: resume.name
      };

      console.log(formData);
      alert("Form submitted successfully");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Uncontrolled Biodata Form (File Upload)</h2>

      Name:
      <input type="text" ref={nameRef} />
      <p>{errors.name}</p>

      Email:
      <input type="email" ref={emailRef} />
      <p>{errors.email}</p>

      Password:
      <input type="password" ref={passwordRef} />
      <p>{errors.password}</p>

      Age:
      <input type="number" ref={ageRef} />

      Gender:
      <input type="radio" name="gender" ref={maleRef} /> Male
      <input type="radio" name="gender" ref={femaleRef} /> Female
      <p>{errors.gender}</p>

      City:
      <select ref={cityRef}>
        <option value="">Select</option>
        <option>Chennai</option>
        <option>Coimbatore</option>
      </select>
      <p>{errors.city}</p>

      Resume (PDF only):
      <input type="file" ref={resumeRef} />
      <p>{errors.resume}</p>

      <input type="checkbox" ref={agreeRef} /> I Agree
      <p>{errors.agree}</p>

      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default BiodataFormUncontrolledFileUpload;