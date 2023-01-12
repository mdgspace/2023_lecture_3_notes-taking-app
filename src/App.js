import React from 'react'
import "./styles/global.css"
import Home from './pages/Home'
import Login from './pages/Login'
import { Routes, Route } from "react-router-dom";
import SIgnup from './pages/SIgnup';
import { all } from 'axios';

const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={< SIgnup/>} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </>
  )
}

export default App
// /signin
// /signup
// /notes/username all
// /notes/:id
