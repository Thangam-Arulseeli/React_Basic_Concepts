import React from "react";

function UserListWithoutKey() {
  const users = [
    { id: 1, name: "Ravindran", role: "Admin" },
    { id: 2, name: "Meenalosani", role: "User" }
  ];
  return (
    <div>
      {users.map((user) => (
        <React.Fragment>
          <h4>{user.name}</h4>
          <p>{user.role}</p>  
        </React.Fragment>
      ))}
    </div>
  );
}

function FragmentWithKey() {
  const users = [
    { id: 1, name: "Sudha", role: "Admin" },
    { id: 2, name: "Yasin Selvam", role: "User" }
  ];

  return (
    <div>
      {users.map((user) => (
        <React.Fragment key={user.id}>
          <h4>{user.name}</h4>
          <p>{user.role}</p>
        </React.Fragment>
      ))}
    </div>
  );
}

function FragmentWithKeyInTable() { 
  const users = [
    { id: 1, name: "Karthik", role: "Admin" },
    { id: 2, name: "Anitha", role: "User" }
  ];  

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <React.Fragment key={user.id}>
            <tr>
              <td>{user.name}</td>
              <td>{user.role}</td>
            </tr> 
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
} 


export default FragmentWithKey;
export { UserListWithoutKey, FragmentWithKeyInTable };

