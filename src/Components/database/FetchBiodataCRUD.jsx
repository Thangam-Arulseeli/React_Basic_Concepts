import { useEffect, useState } from "react";

const API_URL = "http://localhost:3500/biodata";

function FetchBiodataCRUD() {
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
  const [biodataList, setBiodataList] = useState([]);
  const [editId, setEditId] = useState(null);


  /* ================= READ ================= */
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setBiodataList(data));
  }, []);


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


  /* ================= CREATE / UPDATE ================= */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      // UPDATE
      fetch(`${API_URL}/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      }).then(() => {
        fetchData();
        resetForm();
      });
    } else {
      // CREATE
      fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      }).then(() => {
        fetchData();
        resetForm();
      });
    }
  };


  /* ================= FETCH ================= */
  const fetchData = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setBiodataList(data));
  };


  /* ================= EDIT ================= */
  const handleEdit = (item) => {
    setFormData(item);
    setEditId(item.id);
  };

  /* ================= DELETE ================= */
  const handleDelete = (id) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(() => fetchData());
  };

  const resetForm = () => {
    setFormData(initialState);
    setEditId(null);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>BIODATA CRUD (Fetch API)</h2>


      {/* ================= FORM ================= */}
      <form onSubmit={handleSubmit}>
        {/* TEXT */}
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />

        {/* NUMBER */}
        <input name="age" type="number" placeholder="Age" value={formData.age} onChange={handleChange} />

        {/* RADIO */}
        <div>
          Gender:
          <input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} /> Male
          <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange} /> Female
        </div>

        {/* EMAIL */}
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />

        {/* TEL */}
        <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />

        {/* DATE */}
        <input name="dob" type="date" value={formData.dob} onChange={handleChange} />

        {/* SELECT */}
        <select name="qualification" value={formData.qualification} onChange={handleChange}>
          <option value="">Select Qualification</option>
          <option value="BCA">BCA</option>
          <option value="MCA">MCA</option>
          <option value="BSc">BSc</option>
        </select>

        {/* CHECKBOX */}
        <div>
          Skills:
          <input type="checkbox" value="React" checked={formData.skills.includes("React")} onChange={handleChange} /> React
          <input type="checkbox" value="Node" checked={formData.skills.includes("Node")} onChange={handleChange} /> Node
          <input type="checkbox" value="Python" checked={formData.skills.includes("Python")} onChange={handleChange} /> Python
        </div>

        {/* SELECT */}
        <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}>
          <option value="">Marital Status</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
        </select>

        {/* TEXTAREA */}
        <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} />

        <br />
        <button type="submit">{editId ? "Update" : "Save"}</button>
        <button type="button" onClick={resetForm}>Clear</button>
      </form>

      <hr />

      {/* ================= DISPLAY ================= */}
      <h3>Biodata List</h3>
      {biodataList.map(item => (
        <div key={item.id} style={{ border: "1px solid gray", margin: 10, padding: 10 }}>
          <p><b>Name:</b> {item.name}</p>
          <p><b>Age:</b> {item.age}</p>
          <p><b>Gender:</b> {item.gender}</p>
          <p><b>Email:</b> {item.email}</p>
          <p><b>Skills:</b> {item.skills.join(", ")}</p>

          <button onClick={() => handleEdit(item)}>Edit</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default FetchBiodataCRUD;
