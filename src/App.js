import React, { useState } from 'react';
import './style.css';
import userList from './Data.js';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
export default function App() {
  const [users, setUsers] = useState(userList);
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers(...users, user);
  };
  const deleteUser = (id) => setUsers(users.filter((user) => user.id !== id));
  const [editing, setEditing] = useState(false);

  const initialUser = { id: null, name: '', username: '' };

  const [currentUser, setCurrentUser] = useState(initialUser);
  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  };
  const updateUser = (newUser) => {
    setUsers(
      users.map((user) => (user.id === currentUser.id ? newUser : user))
    );
  };

  return (
    <div className="container">
      <h1>React CRUD App with Hooks</h1>
      <div className="row">
        <div className="col-5">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="col-7">
          <UserTable
            users={users}
            deleteUser={deleteUser}
            editUser={editUser}
          />
        </div>
      </div>
    </div>
  );
}
