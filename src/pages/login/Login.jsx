import React from 'react'
import "./login.scss"
import FormInput from "../../components/forminput/FormInput"
import { useState } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import Home from '../home/home';

const Login = () => {
  const navigate = useNavigate()
  const naviagateToHome = () => {
    navigate('/home/admin')
  }
  //INPUT BOX
  const [values,setValues] = useState({
    username:"",
    password:"",
  });
  const inputs = [
    {
    id:1,
    name:"username",
    type: "text",
    placeholder: "Input Username",
    label: "Username",

    },
    {
    id:2,
    name:"password",
    type: "password",
    placeholder: "Input Passowrd",
    label: "Passowrd",

    },
]
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
const onChange = (e)=> {
  setValues({...values, [e.target.name]: e.target.value})
}
console.log(values)
//NO BACKEND LOGIN CODE
  return <div className="app">
    <form onSubmit={handleSubmit}>
    <h1>Log In</h1>
      {inputs.map((input) => (
        <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
      ) )}
      <button onClick={naviagateToHome}>Log In</button>
      <Routes>
        <Route path="home/admin" element={<Home/>}/>
      </Routes>
    </form>
  </div>
}

export default Login