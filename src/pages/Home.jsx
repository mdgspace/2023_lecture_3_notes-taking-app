import React, { useState, useEffect } from "react";
import NotesContainer from "../components/NotesContainer";
import AddNewNote from "../components/AddNewNote";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import reorderNotes from "../utils/reorderNotes";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  const addNote = (note) => {
    setNotes(reorderNotes([note, ...notes]));
  };

  const deleteNote = (deleteNoteId) => {
    const newNotes = notes.filter((note) => {
      return note.id !== deleteNoteId;
    });
    setNotes(newNotes);
  };

  const updateNote = (updateNoteId, newNote) => {
    const unchangesNotes = notes.filter((note) => {
      return note.id !== updateNoteId;
    });
    setNotes(reorderNotes([newNote, ...unchangesNotes]));
  };

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const username = localStorage.getItem("username");
        if (!username) {
          navigate("/login");
          return;
        }
        const response = await axios.get(
          `https://nanonish.pythonanywhere.com/notes/${username}`
        );
        const data = response.data;
        setNotes(reorderNotes(data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchNotes();
  }, [navigate]);

  return (
    <>
      <AddNewNote addNote={addNote} />
      <NotesContainer
        notes={notes}
        updateNote={updateNote}
        deleteNote={deleteNote}
      />
    </>
  );
};

export default Home;
