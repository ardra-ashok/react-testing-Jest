import { useState } from 'react';
import UserList from './UserList'
import UserForm from './UserForm'

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user])
  };
  return <div>
    <UserForm onUserAdd={onUserAdd} />
    <hr />
    <UserList users={users} />
  </div>
}

export default App;
