import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import { Routes, Route } from "react-router-dom";
import Signup from './pages/Signup';
import "./styles/global.css";
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/signup"} element={< Signup />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </>
  )
}

export default App
