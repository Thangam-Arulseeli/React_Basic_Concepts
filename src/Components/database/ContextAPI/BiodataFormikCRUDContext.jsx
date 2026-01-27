import { Formik, Form } from "formik";
//import { biodataSchema } from "./validationSchema";
//import { useBiodata } from "./context/BiodataContext";

//import InputField from "./components/InputField";
//import SelectField from "./components/SelectField";
//import CheckboxGroup from "./components/CheckboxGroup";

import { biodataSchema } from "../FormikCRUD/ValidationSchema";
//import { useBiodata } from "../ContextAPI/hooks/useBiodata";
import {useBiodata} from './context/BiodataContext'   // '../ContextAPI/context/BiodataContext';

import InputField from "../FormikCRUD/InputField";
import SelectField from "../FormikCRUD/SelectField";
import CheckboxGroup from "../FormikCRUD/CheckboxGroup"; 

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

function BiodataFormikCRUDContext() {
  const {
    biodataList,
    addBiodata,
    updateBiodata,
    deleteBiodata,
    editData,
    setEditData
  } = useBiodata();

  const handleSubmit = async (values, { resetForm }) => {
    if (editData) {
      await updateBiodata(editData.id, values);
    } else {
      await addBiodata(values);
    }
    resetForm();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>BIODATA CRUD (Context API + Formik)</h2>

      <Formik
        enableReinitialize
        initialValues={editData || initialValues}
        validationSchema={biodataSchema}
        onSubmit={handleSubmit}
      >
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

          <InputField name="email" label="Email" />
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
            {editData ? "Update" : "Save"}
          </button>
        </Form>
      </Formik>

      <hr />

      {biodataList.map(item => (
        <div key={item.id} style={{ border: "1px solid gray", margin: 10 }}>
          <p><b>{item.name}</b> – {item.email}</p>
          <button onClick={() => setEditData(item)}>Edit</button>
          <button onClick={() => deleteBiodata(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default BiodataFormikCRUDContext;

