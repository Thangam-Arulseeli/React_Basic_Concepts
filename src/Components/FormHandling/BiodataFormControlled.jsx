/*
Complete React Biodata Form with Validation
--------------------------------------------
Features Covered in this code
-----------------------------
✔ Controlled components
✔ Single state object
✔ All major HTML form elements
✔ Field-level validation
✔ Error display
✔ Form submission

1. Controlled Components
-------------------------
📌 Definition
A controlled component is a form element whose value is controlled by React state [useState Hook].
The source of truth is React state.

🔧 How it works
-----------------
•	Value is stored in useState
•	Every change updates state using onChange
•	React re-renders on every change

✅ Example
------------
import { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}

✔ Characteristics
•	Uses value / checked
•	Fully controlled by React
•	Easy validation
•	Predictable behavior

Advantages & Disadvantages
-----------------------------
Advantages::
•	Easy validation
•	Instant feedback
•	Better control
•	Suitable for dynamic forms
Disadvantages::
•	More code
•	Frequent re-renders

When to Use What?
Use Controlled Components when:
✔ Form validation required
✔ Dynamic UI updates
✔ Large forms
✔ Industry-standard applications

*/

import React, { useState } from "react";
function BiodataFormControlled() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    age: "",
    gender: "",
    skills: [],
    city: "",
    courses: [],
    about: "",
    dob: "",
    rating: 50,
    resume: null,
    agree: false
  });

  const [errors, setErrors] = useState({});

  // Handle change for most inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  // Handle multiple checkboxes (skills)
  const handleSkillChange = (e) => {
    const { value, checked } = e.target;
    setFormData({
      ...formData,
      skills: checked
        ? [...formData.skills, value]    
        : formData.skills.filter(skill => skill !== value)
    });
  };

  // Handle multiple select
  const handleCourseChange = (e) => {
    const values = Array.from(
      e.target.selectedOptions,
      option => option.value
    );
    setFormData({ ...formData, courses: values });
  };

  // Handle file
  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  // Validation
  const validate = () => {
    let tempErrors = {};

    if (!formData.name) tempErrors.name = "Name is required";
    if (formData.password.length < 6)
      tempErrors.password = "Password must be at least 6 characters";
    if (!formData.email.includes("@"))
      tempErrors.email = "Invalid email";
    if (!formData.gender)
      tempErrors.gender = "Select gender";
    if (formData.skills.length === 0)
      tempErrors.skills = "Select at least one skill";
    if (!formData.city)
      tempErrors.city = "Select city";
    if (!formData.resume)
      tempErrors.resume = "Upload resume";
    if (!formData.agree)
      tempErrors.agree = "You must accept terms";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form Submitted Successfully!");
      console.log(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Biodata Entry Form</h2>

      {/* Text */}
      Name:
      <input type="text" name="name" onChange={handleChange} />
      <span>{errors.name}</span>
      <br />

      {/* Password */}
      Password:
      <input type="password" name="password" onChange={handleChange} />
      <span>{errors.password}</span>
      <br />

      {/* Email */}
      Email:
      <input type="email" name="email" onChange={handleChange} />
      <span>{errors.email}</span>
      <br />

      {/* Number */}
      Age:
      <input type="number" name="age" onChange={handleChange} />
      <br />

      {/* Radio */}
      Gender:
      <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
      <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
      <span>{errors.gender}</span>
      <br />

      {/* Checkbox (Multiple) */}
      Skills:
      <input type="checkbox" value="Java" onChange={handleSkillChange} /> Java
      <input type="checkbox" value="React" onChange={handleSkillChange} /> React
      <input type="checkbox" value="Python" onChange={handleSkillChange} /> Python
      <span>{errors.skills}</span>
      <br />

      {/* Select */}
      City:
      <select name="city" onChange={handleChange}>
        <option value="">Select</option>
        <option>Chennai</option>
        <option>Coimbatore</option>
        <option>Madurai</option>
      </select>
      <span>{errors.city}</span>
      <br />

      {/* Multiple Select */}
      Courses:
      <select multiple onChange={handleCourseChange}>
        <option value="React">React</option>
        <option value="Java">Java</option>
        <option value="Python">Python</option>
      </select>
      <br />

      {/* Textarea */}
      About You:
      <textarea name="about" onChange={handleChange}></textarea>
      <br />

      {/* Date */}
      Date of Birth:
      <input type="date" name="dob" onChange={handleChange} />
      <br />

      {/* Range */}
      Rating:
      <input type="range" min="0" max="100" name="rating" onChange={handleChange} />
      <br />

      {/* File */}
      Resume:
      <input type="file" onChange={handleFileChange} />
      <span>{errors.resume}</span>
      <br />

      {/* Agreement */}
      <input type="checkbox" name="agree" onChange={handleChange} /> I agree
      <span>{errors.agree}</span>
      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default BiodataFormControlled;

