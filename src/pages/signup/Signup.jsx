import React from 'react'
import "./signup.scss"
import FormInput from "../../components/FormInput"
import { useState } from 'react'

const Signup = () => {
  const [values,setValues] = useState({
    name:"",
    username:"",
    email:"",
    password:"",
    confirmPassword:""
  }); 
  
  const inputs = [
    {
    id:1,
    name:"fullName",
    type: "text",
    placeholder: "Full Name",
    errorMessage: "Example: First name, Middle name, Last name",
    label: "Full Name",
    pattern: "^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,6}$",
    required: true,
    },
    {
    id:2,
    name:"username",
    type: "text",
    placeholder: "Username",
    errorMessage: "Username should be 3-16 characters and shouldn't include any special characters.",
    label: "Username",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
    },
    {
    id:3,
    name:"email",
    type: "email",
    placeholder: "Email",
    errorMessage: "Must contain valid email address",
    label: "Email",
    required: true,
    },
    {
    id:4,
    name:"password",
    type: "password",
    placeholder: "Passowrd",
    errorMessage: "Must contain 8-20 characters including at least 1 number, 1 uppercase, and 1 lowercase letters",
    label: "Passowrd",
    pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?).{8,}$",
    required: true,
    },
    {
    id:5,
    name:"confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    errorMessage: "Password don't match",
    label: "Confirm Password",
    pattern: values.password,
    required: true, 
    }
]
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
const onChange = (e)=> {
  setValues({...values, [e.target.name]: e.target.value})
}
console.log(values)
  return <div className="app">
    <form onSubmit={handleSubmit}>
    <h1>Register</h1>
      {inputs.map((input) => (
        <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
      ) )}
      <button>Log In</button>
    </form>
  </div>
}

export default Signup