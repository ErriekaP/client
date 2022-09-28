import React from 'react'
import './landing.scss'
import {Route, Routes, useNavigate} from 'react-router-dom';
import Login from '../login/Login';

const Landing  = () => {
  const navigate = useNavigate()
  const naviagateToLogin = () => {
    navigate('/login')
  }
  return (
    <div className="landing">
      <div className="nav">
        <button onClick={ naviagateToLogin }>JKCC Supersystem</button>
        <Routes>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Landing