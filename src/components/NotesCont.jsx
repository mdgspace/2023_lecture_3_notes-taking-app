import React, { useState } from "react";
import Modal from "./Modal";

const NotesCont = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>open</button>
      {isOpen && (
        <Modal>
          Hello world
          <button onClick={() => setIsOpen(false)}>Close</button>
        </Modal>
      )}
    </div>
  );
};

export default NotesCont;
