import React, { Fragment, useState } from 'react';

import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';

const App = () => {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {

      return [{ Name: uName, Age: uAge, Id: Math.random().toString() }, ...prevUserList]
    });
  };


  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList userData={userList} />
    </Fragment>
  );
};

export default App;
