import React from 'react'
import Navbar from '../components/Navbar'
import NotesCont from '../components/NotesCont'
import TodoCard from '../components/TodoCard'

const Todo = () => {
  return (
    <div>
    <Navbar />
      <NotesCont />
      <TodoCard/>
      <TodoCard/>
      <TodoCard/>
      <TodoCard/>
      <TodoCard/>
    </div>
  )
}

export default Todo
