import React from 'react'
import Navbar from '../components/Navbar'
import NotesCont from '../components/NotesCont'
import NoteCard from '../components/NoteCard'
import AddNewNote from '../components/AddNewNote'
const Todo = () => {
  return (
    <div>
     <Navbar />
      {/* <NotesProvider> */}
      <AddNewNote />
      <NotesCont />
    </div>
  )
}

export default Todo
