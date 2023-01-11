import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const NotesContext = createContext();

const useNotesContext = () => {
  return useContext(NotesContext);
};

const temp = [
  {
    title: "The Dug of wars",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minusnecessitatibus tenetur accusamus magnam vero labore odit assumenda eligendi sint corporis.",
  },
];

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(temp);
  console.log(notes);
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get("");
        setNotes(response);
      } catch (error) {
        console.log(error);
      }
    };
    // fetchNotes()
  }, []);
  const value = { notes, setNotes };
  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};

export default NotesProvider;

export { useNotesContext };
