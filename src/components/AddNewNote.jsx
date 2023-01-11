import React, { useState } from "react";
import NewNoteModal from "./NewNoteModal";

const AddNewNote = () => {
  const [newNoteModal, setNewNoteModal] = useState(false);
  return (
    <>
      {newNoteModal && <NewNoteModal setNewNoteModal={setNewNoteModal} />}
      <button onClick={() => setNewNoteModal(true)}>Add</button>
    </>
  );
};

export default AddNewNote;
