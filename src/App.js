import React from 'react'
import Navbar from './components/Navbar'
import NotesCont from './components/NotesCont'
import TodoCard from './components/TodoCard'
import "./styles/global.css"

const App = () => {
  return (
    <>
      <Navbar />
      <NotesCont />
      <TodoCard/>
      <TodoCard/>
      <TodoCard/>
      <TodoCard/>
      <TodoCard/>
    </>
  )
}

export default App