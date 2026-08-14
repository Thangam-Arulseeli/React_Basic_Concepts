import React, { useState, useEffect } from "react";

// json-server --watch src\data\users.json --port 3001   ------ To run JSON Server in port 3001
function UserToggle() {
  const API_URL = process.env.base_url+"/users"; 
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // fetch("https://react-json-adh9g641b-pallavikatari.vercel.app/users")
    // fetch("http://localhost:3001/users")  
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setUsers(data));
    //   console.log(data)
  }, []);
 
  // Toggle the details by clicking User Image
  const handleImageClick = (user) => {
    if (selectedUser && selectedUser.id === user.id) {
      setSelectedUser(null);
    } else {
      setSelectedUser(user);
    }
  };

  return (
    <div style={{ marginLeft: 100, marginTop: 50 }}>
      <h4>User List - Toggle</h4>
      <div className="row">
        {users.map((user) => (
          <div
            className="col-sm-3"
            style={{ marginLeft: 50, marginTop: 50 }}>
            <p key={user.id} onClick={() => handleImageClick(user)}>
              <img
                src={user.imageUrl}
                alt={user.name}
                width={50}
                height={50}
              />
              {selectedUser && selectedUser.id === user.id && (
                <div>
                  <h5>{user.name}</h5>
                  <p style={{fontSize: 10}}>City: {user.city}</p>
                  <p style={{fontSize: 10}}>Age: {user.age}</p>
                </div>
              )}
            </p>
          </div>
        ))}
      </div>
      <hr />
      <UserFilter />
      <hr />
      <UserFilter1 />
      <hr />
      <UserSearch />
    </div>
  );
}

export default UserToggle;

//FILTER BY NAME - Static Filter
function UserFilter() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
   // fetch("https://react-jsonserver-vercel-n8udx7yob-pallavikatari.vercel.app/users")
     fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
    //   console.log(data)
  }, []);

  return (
    <div>
      <h2>User List - Filter by Name -- First component </h2>
      <div className="row">
        {users
          .filter((user) => user.name.includes("D")) // Static Filter - Filter by Name which includes "D" in the name
          .map((user) => (
            <div
              className="col col-md-3"
              style={{ marginLeft: 50, marginTop: 50 }}>
              <p key={user.id}>
                <img
                  src={user.imageUrl}
                  alt={user.name}
                  width={100}
                  height={100}
                />
                <div>
                  <h3>{user.name}</h3>
                  <p>City: {user.city}</p>
                  <p>Age: {user.age}</p>
                </div>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

//FILTER AGE - Static Filter
function UserFilter1() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //fetch("https://react-jsonserver-vercel-n8udx7yob-thangamarulseeli.vercel.app/users")
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
    //   console.log(data)
  }, []);

  return (
    <div>
      <h2>User List - Filter by Age</h2>
      <div className="row">
        {users
          .filter((user) => user.age > 30) // Static Filter - Filter by Age greater than 30
          .map((user) => (
            <div
              className="col col-md-3"
              style={{ marginLeft: 50, marginTop: 50 }}>
              <p key={user.id}>
                <img
                  src={user.imageUrl}
                  alt={user.name}
                  width={100}
                  height={100}
                />
                <div>
                  <h3>{user.name}</h3>
                  <p>City: {user.city}</p>
                  <p>Age: {user.age}</p>
                </div>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

// USER SEARCH -- Dynamic Filter
function UserSearch() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // fetch("https://react-jsonserver-vercel-n8udx7yob-thangamarulseeli.vercel.app/users")
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
    //   console.log(data)
  }, []);
  return (
    <div className="App">
      <b>SEARCH USER</b> <br />
      <br />
      <input
        className="text text-success btn btn-warning"
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="row" style={{ marginTop: 50 }}>
        {users
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase()) ) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <div className="col col-md-3">
                <img
                  src={val.imageUrl}
                  alt={val.name}
                  width={100}
                  height={100}
                />
                <div>
                  <h3>{val.name}</h3>
                  <p>City: {val.city}</p>
                  <p>Age: {val.age}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

