import React, { useState } from "react";
import NewNoteModal from "./NewNoteModal";

const AddNewNote = () => {
  const [newNoteModal, setNewNoteModal] = useState(false);
  return (
    <>
      {newNoteModal && <NewNoteModal setNewNoteModal={setNewNoteModal} />}
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
