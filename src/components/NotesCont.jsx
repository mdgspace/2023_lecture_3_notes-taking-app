import React from "react";
import NoteCard from "./NoteCard";

const NotesCont = ({ notes, setNotes }) => {
  return (
    <>
      <div className="notes-cont">
        {notes.map((note) => {
          return (
            <NoteCard
              key={note.id}
              note={note}
              notes={notes}
              setNotes={setNotes}
            />
          );
        })}
      </div>
    </>
  );
};

export default NotesCont;
