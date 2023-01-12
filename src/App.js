import React from 'react'
import "./styles/global.css"
import Home from './pages/Home'
import Login from './pages/Login'
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={"/home"} element={<Home />} />
      </Routes>
    </>
  )
}

export default App