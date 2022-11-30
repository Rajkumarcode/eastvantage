import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import './Form.css';
import axios from 'axios';

function Forms() {
  const [name, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

    const url = 'http://localhost:8000/api/store';
    const submitButton = (e) =>{
      if(name == ''){
        alert('name field is required');
      }
      else if(email == ''){
        alert('email field is required');
      }
      else if(role == ''){
        alert('role field is required');
      }else{
        e.preventDefault();
        axios.post(url , {
          name,
          email,
          role
        })
          .then(response => {
              console.log(response.data);
              window.location.reload();
          })
          .catch(({response}) => {
              console.log(response);
          });
    }
  }
  return (
    <>
    <div className='container'>
      <form>
        <h4>Create User</h4>
        <div className='form-group'>
          <label>Full Name</label>
          <input type="text" name="name" onChange={e => setFullname( e.target.value)} className='form-control' placeholder='Full Name' />
        </div>

        <div className='form-group'>
          <label>Email</label>
          <input type="email" name="email" onChange={e => setEmail( e.target.value)}  className='form-control' placeholder='Email' />
        </div>

        <div className='form-group'>
                <label>Role</label>
                <select name="role" onChange={e => setRole( e.target.value)} className='form-control' >
                    <option value=''>Select Role</option>  
                    <option value='Author'>Author</option>
                    <option value='Editor'>Editor</option>
                    <option value='Subscriber'>Subscriber</option> 
                    <option value='Administrator'>Administrator</option> 
                </select>
            </div>

            <div>
            <button onClick={submitButton}>Create</button>
            </div>
      </form>
      </div>
    </>
  )
}

export default Forms
