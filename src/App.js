import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (Uname, Uage) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, { id: Math.random.toString(), name: Uname, age: Uage }];
    });
  };



  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
};


export default App; 
