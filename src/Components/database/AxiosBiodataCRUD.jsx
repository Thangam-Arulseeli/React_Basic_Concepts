import { useEffect, useState } from "react";
import api from "./ApiAxios";

function AxiosBiodataCRUD() {

  const initialState = {
    name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    dob: "",
    qualification: "",
    skills: [],
    maritalStatus: "",
    address: ""
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [biodataList, setBiodataList] = useState([]);
  const [editId, setEditId] = useState(null);


  /* ================= READ ================= */
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await api.get("/biodata");
    setBiodataList(response.data);
  };


  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData(prev => ({
        ...prev,
        skills: checked
          ? [...prev.skills, value]
          : prev.skills.filter(skill => skill !== value)
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };


  /* ================= FORM VALIDATION ================= */
  const validate = () => {
    let tempErrors = {};

    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.age || formData.age <= 0) tempErrors.age = "Valid age required";
    if (!formData.gender) tempErrors.gender = "Gender required";

    if (!formData.email) {
      tempErrors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }

    if (!formData.phone || formData.phone.length !== 10)
      tempErrors.phone = "Valid 10-digit phone required";

    if (!formData.qualification)
      tempErrors.qualification = "Qualification required";

    if (formData.skills.length === 0)
      tempErrors.skills = "Select at least one skill";

    if (!formData.address)
      tempErrors.address = "Address required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };


  /* ================= CREATE / UPDATE ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    if (editId) {
      await api.put(`/biodata/${editId}`, formData);
    } else {
      await api.post("/biodata", formData);
    }

    fetchData();
    resetForm();
  };


  /* ================= EDIT ================= */
  const handleEdit = (item) => {
    setFormData(item);
    setEditId(item.id);
    setErrors({});
  };


  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    await api.delete(`/biodata/${id}`);
    fetchData();
  };

  const resetForm = () => {
    setFormData(initialState);
    setErrors({});
    setEditId(null);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>BIODATA CRUD (Axios + Validation)</h2>

      <form onSubmit={handleSubmit}>

        <input name="name" placeholder="Name"
          value={formData.name} onChange={handleChange} />
        <span style={{ color: "red" }}>{errors.name}</span>

        <input name="age" type="number" placeholder="Age"
          value={formData.age} onChange={handleChange} />
        <span style={{ color: "red" }}>{errors.age}</span>

        <div>
          Gender:
          <input type="radio" name="gender" value="Male"
            checked={formData.gender === "Male"} onChange={handleChange} /> Male
          <input type="radio" name="gender" value="Female"
            checked={formData.gender === "Female"} onChange={handleChange} /> Female
          <span style={{ color: "red" }}>{errors.gender}</span>
        </div>

        <input name="email" type="email" placeholder="Email"
          value={formData.email} onChange={handleChange} />
        <span style={{ color: "red" }}>{errors.email}</span>

        <input name="phone" placeholder="Phone"
          value={formData.phone} onChange={handleChange} />
        <span style={{ color: "red" }}>{errors.phone}</span>

        <input name="dob" type="date"
          value={formData.dob} onChange={handleChange} />

        <select name="qualification"
          value={formData.qualification} onChange={handleChange}>
          <option value="">Select Qualification</option>
          <option value="BCA">BCA</option>
          <option value="MCA">MCA</option>
        </select>
        <span style={{ color: "red" }}>{errors.qualification}</span>

        <div>
          Skills:
          <input type="checkbox" value="React"
            checked={formData.skills.includes("React")}
            onChange={handleChange} /> React
          <input type="checkbox" value="Node"
            checked={formData.skills.includes("Node")}
            onChange={handleChange} /> Node
          <span style={{ color: "red" }}>{errors.skills}</span>
        </div>

        <textarea name="address" placeholder="Address"
          value={formData.address} onChange={handleChange} />
        <span style={{ color: "red" }}>{errors.address}</span>

        <br />
        <button type="submit">
          {editId ? "Update" : "Save"}
        </button>
        <button type="button" onClick={resetForm}>Clear</button>

      </form>

      <hr />

      <h3>Biodata List</h3>
      {biodataList.map(item => (
        <div key={item.id} style={{ border: "1px solid gray", margin: 10, padding: 10 }}>
          <p><b>Name:</b> {item.name}</p>
          <p><b>Email:</b> {item.email}</p>
          <p><b>Skills:</b> {item.skills.join(", ")}</p>
          <button onClick={() => handleEdit(item)}>Edit</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
export default AxiosBiodataCRUD;
