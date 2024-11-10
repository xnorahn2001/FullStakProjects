import React, { useState } from 'react';

const ProfilePage = () => {
  const [user, setUser] = useState({
    firstName: 'First name ',
    lastName: 'Last name',
    email: 'Email '
  });

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Profile</h1>
      <label>firstName:</label>
      <input type="text" name="firstName" value={user.firstName} onChange={handleInputChange} />
      <label>Lastname:</label>
      <input type="text" name="lastName" value={user.lastName} onChange={handleInputChange} />
      <label>Email:</label>
      <input type="email" name="email" value={user.email} onChange={handleInputChange} />
      <button>Save changes</button>
    </div>
  );
};

export default ProfilePage;
