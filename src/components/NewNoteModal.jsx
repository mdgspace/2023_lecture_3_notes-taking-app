import axios from "axios";
import React, { useRef } from "react";
import Modal from "./Modal";

const NewNoteModal = ({ setNewNoteModal, notes, setNotes }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();

  const saveNote = async () => {
    try {
      const newNote = {
        author: "nikhil",
        title: titleRef.current.value,
        text: descriptionRef.current.value,
      };
      await axios.post("http://localhost:8000/notes/", newNote);
      setNotes([...notes, newNote]);
      alert("Saved Successfully");
      setNewNoteModal(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal>
      <div className="modal-content">
        <div className="modal-header mb-2">
          <h1 className="modal-title fs-5">
            <input
              ref={titleRef}
              className="form-control"
              type="text"
              placeholder="Title"
            />
          </h1>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => setNewNoteModal(false)}
          ></button>
        </div>
        <div className="modal-body mb-2">
          <textarea
            ref={descriptionRef}
            className="form-control"
            placeholder="Description"
            rows="5"
          ></textarea>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" onClick={saveNote}>
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default NewNoteModal;
