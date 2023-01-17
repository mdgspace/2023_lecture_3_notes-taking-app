import React from "react";
import NoteCard from "./NoteCard";

const NotesContainer = ({ notes, deleteNote, updateNote }) => {
  return (
    <>
      <div className="notes-cont">
        {notes.map((note) => {
          return (
            <NoteCard
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              updateNote={updateNote}
            />
          );
        })}
      </div>
    </>
  );
};

export default NotesContainer;
