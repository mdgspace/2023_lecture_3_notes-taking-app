import React from "react";
import Navbar from "../components/Navbar";
import NotesCont from "../components/NotesCont";
import AddNewNote from "../components/AddNewNote";

const Home = () => {
  return (
    <>
      <Navbar />
      <AddNewNote />
      <NotesCont />
    </>
  );
};

export default Home;
