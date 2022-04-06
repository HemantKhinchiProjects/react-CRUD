import React, { useState, useEffect } from 'react';
const EditUserForm = (props) => {
  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);
  const [user, setUser] = useState(props.currentUser);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.username) props.updateUser(user);
  };

  return (
    <form>
      <label>Name</label>
      <input
        className="form-control"
        type="text"
        value={user.name}
        name="name"
        onChange={handleChange}
      />
      <label>Username</label>
      <input
        className="form-control"
        type="text"
        value={user.username}
        name="username"
        onChange={handleChange}
      />
      <div className="btn-group mt-2">
        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmit}
        >
          Edit user
        </button>
        <button
          type="submit"
          onClick={() => props.setEditing(false)}
          className="btn btn-outline-primary"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
export default EditUserForm;
