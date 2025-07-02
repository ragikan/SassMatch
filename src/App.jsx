import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { Routes, Route, Form } from "react-router-dom"; // 
import ProfileCard from './pages/ProfileCard';
import Forms from './pages/Form';
import Swipe from './pages/Swipe';
import QuestionForm from './pages/QuestionForm';



function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Signup />} /> 
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ProfileCard" element={<ProfileCard />} />
      <Route path="/form" element={<QuestionForm />} />
      <Route path="/swipe/:uid" element={<Swipe />} />
    </Routes>
  )
}

export default App
