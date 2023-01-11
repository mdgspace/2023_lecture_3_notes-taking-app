import React from 'react'
import Navbar from './components/Navbar'
import AddNewNote from './components/AddNewNote'
import NotesCont from './components/NotesCont'
import "./styles/global.css"

const App = () => {
  return (
    <>
      <Navbar />
      <AddNewNote />
      <NotesCont />
    </>
  )
}

export default App