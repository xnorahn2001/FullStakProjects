import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>List of users </h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <p>{user.firstName} {user.lastName}</p>
            <button>Delete user </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
