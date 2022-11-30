import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import Form from './Components/Form';
import UserDetails from './Components/UserDetails';
import {Button,Modal} from 'react-bootstrap';

function App() {
  return (
    <div >
   
      
      <UserDetails />
      <Form />
    </div>
  );
}

export default App;
