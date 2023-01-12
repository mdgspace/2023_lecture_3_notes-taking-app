import React from 'react'
import Navbar from './components/Navbar'
import NotesCont from './components/NotesCont'
import TodoCard from './components/TodoCard'
import "./styles/global.css"
import Todo from './pages/Todo'
import Login from './pages/Login'
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>

    <Routes>
      <Route path={"/"} element={<Login />} />
      <Route path={"/home"} element={<Todo />} />
    </Routes>
    </>
  )
}

export default App