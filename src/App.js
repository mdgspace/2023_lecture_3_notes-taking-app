import React from 'react'
import Navbar from './components/Navbar'
import AddNewNote from './components/AddNewNote'
import NotesCont from './components/NotesCont'
import "./styles/global.css"
import Todo from './pages/Todo'
import Login from './pages/Login'
import { Routes, Route } from "react-router-dom";
import NotesProvider from './contexts/NotesProvider'

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