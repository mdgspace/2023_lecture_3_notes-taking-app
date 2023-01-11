import React from 'react'
import Navbar from './components/Navbar'
import AddNewNote from './components/AddNewNote'
import NotesCont from './components/NotesCont'
import "./styles/global.css"
import NotesProvider from './contexts/NotesProvider'

const App = () => {
  return (
    <>
      <Navbar />
      {/* <NotesProvider> */}
      <AddNewNote />
      <NotesCont />
      {/* </NotesProvider> */}
    </>
  )
}

export default App