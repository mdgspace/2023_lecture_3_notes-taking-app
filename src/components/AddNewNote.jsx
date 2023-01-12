import React, { useState } from "react";
import NewNoteModal from "./NewNoteModal";

const AddNewNote = ({ notes, setNotes }) => {
  const [newNoteModal, setNewNoteModal] = useState(false);
  return (
    <>
      {newNoteModal && (
        <NewNoteModal
          setNewNoteModal={setNewNoteModal}
          notes={notes}
          setNotes={setNotes}
        />
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
