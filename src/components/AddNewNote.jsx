import React, { useState } from "react";
import NewNoteModal from "./NewNoteModal";

const AddNewNote = ({ addNote }) => {
  const [newNoteModal, setNewNoteModal] = useState(false);
  return (
    <>
      {newNoteModal && (
        <NewNoteModal setNewNoteModal={setNewNoteModal} addNote={addNote} />
      )}
      <button
        className="add-btn btn btn-secondary"
        onClick={() => setNewNoteModal(true)}
      >
        Add New Note
      </button>
    </>
  );
};

export default AddNewNote;
