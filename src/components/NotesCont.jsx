import axios from "axios";
import React, { useEffect, useState } from "react";
import NoteCard from "./NoteCard";

const temp = [
  {
    title: "The Dug of wars",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minusnecessitatibus tenetur accusamus magnam vero labore odit assumenda eligendi sint corporis.",
  },
];

const NotesCont = () => {
  const [notes, setNotes] = useState(temp);

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

  return (
    <>
      <div className="notes-cont">
        {notes.map((note) => {
          return <NoteCard note={note} />;
        })}
      </div>
    </>
  );
};

export default NotesCont;
