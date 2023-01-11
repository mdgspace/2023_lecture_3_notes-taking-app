import axios from "axios";
import React, { useEffect, useState } from "react";
import NoteCard from "./NoteCard";

const NotesCont = () => {
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
        console.log(pinned, unpinned);
        setNotes([...pinned, ...unpinned]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNotes();
  }, []);

  return (
    <>
      <div className="notes-cont">
        {notes.map((note) => {
          return <NoteCard key={note.id} note={note} />;
        })}
      </div>
    </>
  );
};

export default NotesCont;
