import React from 'react';
import UserList from './UserList';
import OrderList from './OrderList';

const AdminPanel = () => {
  return (
    <div>
      <h1>Admin control panel  </h1>
      <UserList />
      <OrderList />
    </div>
  );
};

export default AdminPanel;
