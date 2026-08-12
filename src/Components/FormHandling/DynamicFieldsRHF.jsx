/*
Dynamic Fields (Add / Remove Skills) – React Hook Form
--------------------------------------------------------
Dynamic fields allow the user to add or remove inputs at runtime, for example:
•	Multiple skills
•	Phone numbers
•	Qualifications
•	Experience entries
RHF provides a built-in hook for this:
  useFieldArray()

🔹 Key Concepts
✅ useFieldArray
Used to manage dynamic form fields.
const { fields, append, remove } = useFieldArray({
  control,
  name: "skills"
});
Method	         Purpose
fields	         Current dynamic fields
append()  	     Add a new field at the end
remove(index)	   Remove a field

📦 Installation (if not installed)
npm install react-hook-form


🔍 Output Data Structure
When submitted, data looks like:
{
  "skills": [
    { "skill": "Java" },
    { "skill": "React" },
    { "skill": "Python" }
  ]
}

How It Works (Simple Explanation)
1.	useForm() initializes the form
2.	useFieldArray() manages the skills array
3.	append() adds a new input field
4.	remove() deletes a specific field
5.	RHF automatically tracks values & errors

🎯 Interview Important Points
✔ useFieldArray is used for dynamic fields
✔ Works with uncontrolled components
✔ Efficient & minimal re-renders
✔ Ideal for large dynamic forms
✔ Can be combined with Yup validation
🔹NOTE
Dynamic fields in React Hook Form are handled using useFieldArray, 
which allows adding and removing form inputs dynamically while maintaining performance.
*/

//Complete Example: Dynamic Skills Form (Add / Remove)
//📄 DynamicSkillsForm.jsx
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

function DynamicFieldsRHS() {

  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
     defaultValues: {
      skills: [{ skill: "" }]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills"
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("Form submitted successfully");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Dynamic Skills Form</h2>

      {fields.map((field, index) => (
        <div key={field.id}>
          <input
            placeholder="Enter skill"
            {...register(`skills.${index}.skill`, 
              {
              required: "Skill is required"
            })}
          />

          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>

          <p>{errors.skills?.[index]?.skill?.message}</p>
        </div>
      ))}

      <button
        type="button"
        onClick={() => append({ skill: "" })}
      >
        Add Skill
      </button>

      <br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default DynamicFieldsRHS;

