import React, { useState, useEffect } from "react";
import NotesCont from "../components/NotesCont";
import AddNewNote from "../components/AddNewNote";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const username = localStorage.getItem("username");
        if (!username) {
          navigate("/login");
          return;
        }
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
  }, [navigate]);

  return (
    <>
      <AddNewNote notes={notes} setNotes={setNotes} />
      <NotesCont notes={notes} setNotes={setNotes} />
    </>
  );
};

export default Home;
