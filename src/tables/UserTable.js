import React from 'react';

const UserTable = (props) => {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user) => {
            const { id, name, username } = user;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>
                  <div class="btn-group">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => props.deleteUser(id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => props.editUser(id, user)}
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={4} className="text-center">
              No users found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
export default UserTable;
