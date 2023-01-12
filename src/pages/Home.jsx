import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import NotesCont from "../components/NotesCont";
import AddNewNote from "../components/AddNewNote";
import axios from "axios";

const Home = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const username = "nikhil";
        const response = await axios.get(
          `http://localhost:8000/notes/${username}`
        );
        const data = response.data;
        const pinned = [];
        const unpinned = [];

        for (let i = 0; i < data.length; i++) {
          if (data[i].isPin) pinned.push(data[i]);
          else unpinned.push(data[i]);
        }
        setNotes([...pinned, ...unpinned]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNotes();
  }, []);
  return (
    <>
      <Navbar />
      <AddNewNote notes={notes} setNotes={setNotes} />
      <NotesCont notes={notes} setNotes={setNotes} />
    </>
  );
};

export default Home;
