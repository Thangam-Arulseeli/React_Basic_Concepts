import { useRef, useEffect } from "react";
//import { useBiodata } from "./context/BiodataContext";
//import {useBiodata} from './BiodataContext';

function BiodataRefCRUD() {
  const { biodataList, addBiodata, deleteBiodata, editData, updateBiodata, setEditData } = useBiodata();
  //import {useBiodata} from '../ContextAPI/context/BiodataContext';

  const nameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  /* ===== Populate values during Edit ===== */
  useEffect(() => {
    if (editData) {
      nameRef.current.value = editData.name;
      ageRef.current.value = editData.age;
      emailRef.current.value = editData.email;
      phoneRef.current.value = editData.phone;
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: nameRef.current.value,
      age: ageRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value
    };

    if (editData) {
      updateBiodata(editData.id, data);
      setEditData(null);
    } else {
      addBiodata(data);
    }

    e.target.reset(); // Clear form
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>BIODATA CRUD (useRef – Uncontrolled)</h2>

      <form onSubmit={handleSubmit}>
        <input ref={nameRef} placeholder="Name" />
        <input ref={ageRef} type="number" placeholder="Age" />
        <input ref={emailRef} placeholder="Email" />
        <input ref={phoneRef} placeholder="Phone" />

        <button type="submit">
          {editData ? "Update" : "Save"}
        </button>
      </form>

      <hr />

      {biodataList.map(item => (
        <div key={item.id}>
          <p>{item.name} - {item.email}</p>
          <button onClick={() => setEditData(item)}>Edit</button>
          <button onClick={() => deleteBiodata(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default BiodataRefCRUD;

