import React, { useState } from 'react';
import './style.css';
import userList from './Data.js';
import UserTable from './tables/UserTable';
export default function App() {
  const [users, setUsers] = useState(userList);
  return (
    <div className="container">
      <h1>React CRUD App with Hooks</h1>
      <div className="row">
        <div className="col-5">
          <h2>Add user</h2>
        </div>
        <div className="col-7">
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
}
