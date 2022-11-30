import './UserDetails.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


function UserDetails() {
    const [todo, setTodo] = useState([]);
    useEffect(() => {
      axios
        .get('http://127.0.0.1:8000/api/users')
        .then(function(response) {
          setTodo(response.data.user)
        })
        .catch(error => console.log(error));
    }, []);

  return (
    <>
    <div className='table_style'>
       <table>
         <thead>
          <tr>
            <th>SL No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((val, key) => (
            <tr key={val.id}>
              <td>{key+1}</td>
                <td>{val.fullname}</td>
                <td>{val.user_mail}</td>
                <td>{val.user_role}</td>
               
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default UserDetails
