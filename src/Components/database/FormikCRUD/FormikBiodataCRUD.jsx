import { useEffect, useState } from "react";
import { Formik, Form } from "formik";

//import api from "./api";
import api from './ApiFormik';
import { biodataSchema } from "./ValidationSchema";

import InputField from "./InputField";
import SelectField from "./SelectField";
import CheckboxGroup from "./CheckboxGroup";

const initialValues = {
  name: "",
  age: "",
  gender: "",
  email: "",
  phone: "",
  qualification: "",
  skills: [],
  address: ""
};

function FormikBiodataCRUD() {
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [selectedData, setSelectedData] = useState(initialValues);

  

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await api.get("/biodata");
    setList(res.data);
  };

  const handleSubmit = async (values, { resetForm }) => {
    if (editId) {
      await api.put(`/biodata/${editId}`, values);
    } else {
      await api.post("/biodata", values);
    }
    resetForm();
    setEditId(null);
    loadData();
  };

  // const handleEdit = (item, setValues) => {
  //   setValues(item);
  //   setEditId(item.id);
  // };


  const handleEdit = (item) => {
      setSelectedData(item);
      setEditId(item.id);
  };


  const handleDelete = async (id) => {
    await api.delete(`/biodata/${id}`);
    loadData();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>BIODATA CRUD (Formik + Yup + Axios)</h2>

      {/* <Formik
        initialValues={initialValues}
        validationSchema={biodataSchema}
        onSubmit={handleSubmit}
      > */}

      <Formik
         initialValues={selectedData}
         enableReinitialize
          validationSchema={biodataSchema}
          onSubmit={handleSubmit}
      >

        {({ setValues }) => (
          <Form>
            <InputField name="name" label="Name" />
            <InputField name="age" label="Age" type="number" />

            Gender:
            <label>
              <InputField type="radio" name="gender" value="Male" /> Male
            </label>
            <label>
              <InputField type="radio" name="gender" value="Female" /> Female
            </label>

            <InputField name="email" label="Email" type="email" />
            <InputField name="phone" label="Phone" />

            <SelectField
              name="qualification"
              label="Qualification"
              options={["BCA", "MCA", "BSc"]}
            />

            <CheckboxGroup
              name="skills"
              label="Skills"
              options={["React", "Node", "Python"]}
            />

            <InputField name="address" label="Address" as="textarea" />

            <button type="submit">
              {editId ? "Update" : "Save"}
            </button>
          </Form>
        )}
      </Formik>

      <hr />

      {list.map(item => (
        <div key={item.id} style={{ border: "1px solid gray", margin: 10 }}>
          <p><b>{item.name}</b> – {item.email}</p>
          <button onClick={() => handleEdit(item, setValues => setValues(item))}>
            Edit
          </button>

  {/* Issues:

  setValues is not in scope here

  You are passing a function instead of Formik’s actual setValues

  Hence React throws:
  👉 setValues is not a function

  ✅ Correct & Professional Solution (Formik Way)
  ✔️ Store the selected record in state
  ✔️ Let Formik reinitialize form valu */}

          <button onClick={() => handleDelete(item.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default FormikBiodataCRUD;
