import React, { useState } from 'react';
const AddUserForm = (props) => {
  const initUser = { id: null, name: '', username: '' };
  const [user, setUser] = useState(initUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.username) {
      handleChange(e, props.addUser(user));
    }
  };
  return (
    <form>
      <label>Name</label>
      <input
        className="form-control"
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <label>Username</label>
      <input
        className="form-control"
        type="text"
        name="username"
        value={user.username}
        onChange={handleChange}
      />
      <button
        className="btn btn-primary mt-2"
        type="submit"
        onClick={handleSubmit}
      >
        Add user
      </button>
    </form>
  );
};
export default AddUserForm;
