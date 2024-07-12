import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
        const data = await axios.get('http://localhost:4200/List')

      setUsers(data.data);
    })();
  }, [users]);

  

  return (
    <>
    {console.log(users)}
    <div className='container'>
      <ul class="list-group">
      {/* <li class="list-group-item">Lista</li> */}
      <h2>Lista</h2>
        {users.map((user) => (
          <li class="list-group-item" key={user.id}>{user.id} {user.nome}</li>
        ))}
      </ul>
      </div>
    </>
  );
}
