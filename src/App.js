import React from 'react'
import Navbar from './components/Navbar'
import NotesCont from './components/NotesCont'
import "./styles/global.css"

const App = () => {
  return (
    <>
      <Navbar />
      <NotesCont />
    </>
  )
}

export default App